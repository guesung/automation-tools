"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function NotionScrapButton() {
  const handleApiTestClick = async () => {
    const {
      data: { response },
    } = await axios.get("/api/notion");
    console.log(response);
  };

  return (
    <div>
      <Button onClick={handleApiTestClick}>노션 긁어오기</Button>
    </div>
  );
}
