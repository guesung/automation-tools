"use client";
import axios from "axios";

export default function NotionScrapButton() {
  const handleApiTestClick = async () => {
    const {
      data: { response },
    } = await axios.get("/api/notion");
    console.log(response);
  };

  return (
    <div>
      <button onClick={handleApiTestClick}>노션 긁어오기</button>
    </div>
  );
}
