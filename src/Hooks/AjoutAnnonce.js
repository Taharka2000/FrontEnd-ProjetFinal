import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useAjout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();

  const ajouter = async (DateDepart, DateArrive, LieuDepart,LieuArrive, heure) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/ajout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ DateDepart, DateArrive, LieuDepart,LieuArrive, heure }),
      });

      const json = await response.json();

   if (!response.ok) throw new Error(json.message || "An error occurred");
    } catch (error) {
      console.log('Erreur lors de la requête d\'ajout :', error);
      setError('Une erreur sest produite lors de la requête dajout.');
    } finally {
      setIsLoading(false);
    }
  };

  return { ajouter, isLoading, error };
};

