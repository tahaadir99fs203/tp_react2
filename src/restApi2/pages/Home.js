import React, { useEffect, useState, useCallback } from "react";
import api from "../services/api";
import MediaTable from "../components/MediaTable";

export default function Home() {
  const [medias, setMedias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMedias = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/medias");
      setMedias(res.data || []);
    } catch (err) {
      console.error("Failed to load medias:", err);
      setError("Impossible de charger les médias.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMedias();
  }, [loadMedias]);

  const deleteMedia = async (id) => {
    if (!window.confirm("Confirmer la suppression ?")) return;
    try {
      await api.delete(`/medias/${id}`);
      setMedias((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Failed to delete media:", err);
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div>
      <h2>Liste des Médias</h2>

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <MediaTable medias={medias} onDelete={deleteMedia} />
      )}
    </div>
  );
}