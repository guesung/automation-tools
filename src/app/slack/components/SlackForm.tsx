"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SlackForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: "안녕하세요!" },
  });

  const onSubmit = async (data: { text: string }) => {
    const { text } = data;
    await axios.post("/api/slack", { text });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="메시지를 입력하세요" {...register("text")} />
      <Button>슬랙 메시지 전송</Button>
    </form>
  );
}
