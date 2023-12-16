import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name, role) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, role }),
      });

      if (!response.ok) {
        const json = await response.json();
        setIsLoading(false);
        setError(json.error);
      } else {
        // Ne dispatchez pas automatiquement après l'inscription
        // dispatch({ type: 'LOGIN', payload: json });
        window.location.reload();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Une erreur s'est produite lors de l'inscription.");
    }
  };

  return { signup, isLoading, error };
};
