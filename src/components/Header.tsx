import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, LogIn, LogOut, Menu, User, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/", { replace: true });
      window.location.reload();
    } catch (error) {
      console.error("Sign-out error:", error);
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "Please try again.",
      });
    }
  };

  const navLinks = [
    { label: "Categories", path: "/categories" },
    { label: "NGOs", path: "/ngos" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Impact", path: "/impact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* ✅ Brand Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">DenaSetu</span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ✅ Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            <div className="w-24 h-10 bg-muted animate-pulse rounded-md" />
          ) : user ? (
            <>
              <Button asChild variant="outline" size="sm">
                <Link to={isAdmin ? "/admin" : "/donor/dashboard"}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button
                onClick={handleSignOut}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/auth">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
          )}
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-muted focus:outline-none"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-base ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-border pt-4 mt-2">
              {user ? (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mb-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to={isAdmin ? "/admin" : "/donor/dashboard"}>
                      <User className="mr-2 h-4 w-4" /> Dashboard
                    </Link>
                  </Button>
                  <Button
                    onClick={handleSignOut}
                    variant="ghost"
                    className="w-full text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link to="/auth">
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
