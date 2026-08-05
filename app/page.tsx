"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [review, setReview] = useState("Generating your review...");

  useEffect(() => {
    fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:
          "Write a professional Google review for an RO water purifier repair and service company in 80-120 words.",
      }),
    })
      .then((res) => res.json())
      .then((data) => setReview(data.review))
      .catch(() =>
        setReview("Unable to generate review. Please try again.")
      );
  }, []);

  const copyAndOpen = async () => {
    await navigator.clipboard.writeText(review);

    window.open(
      "https://g.page/r/CYC1pjClZyqtEBM/review",
      "_blank"
    );
  };

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
      }}
    >
      <h1>⭐ RO Review AI</h1>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={8}
        style={{
          width: "100%",
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
        }}
      />

      <button
        onClick={copyAndOpen}
        style={{
          marginTop: 20,
          width: "100%",
          padding: 14,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Copy Review & Open Google Review
      </button>
    </main>
  );
}