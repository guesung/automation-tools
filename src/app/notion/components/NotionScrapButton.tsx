"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";

const divisionBarMessage = "------------------------------";

interface NotionItemType {
  properties: {
    Person: {
      people: {
        name: string;
      }[];
    };
    Sprint: {
      multi_select: {
        name: string;
      }[];
    };
    Name: {
      title: {
        text: {
          content: string;
        };
      }[];
    };
    ToDoList: {
      rich_text: {
        text: {
          content: string;
        };
      }[];
    };
  };
}
const getWeek = (date: Date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  const thisMonth = date.getMonth() > 12 ? 1 : date.getMonth() + 1;

  return `${thisMonth}월 ${Math.ceil((currentDate + firstDay) / 7)}주차`;
};

export default function NotionScrapButton() {
  const handleApiTestClick = async () => {
    const { data } = await axios.get("/api/notion");
    const messageArray = [];
    const thisWeek = getWeek(new Date());

    messageArray.push(`:calendar: *${thisWeek}* Sprint 알림`);
    messageArray.push(divisionBarMessage);
    const thisWeekSprint = data.response.filter((item: NotionItemType) => {
      const { Sprint } = item.properties;
      return Sprint.multi_select[0].name === thisWeek;
    });
    thisWeekSprint.forEach((item: NotionItemType) => {
      const { Person, Sprint, Name, ToDoList } = item.properties;
      const name = Person.people[0].name;
      const sprint = Sprint.multi_select[0].name;
      const title = Name.title[0].text.content;
      const todo = ToDoList.rich_text[0].text.content;
      messageArray.push(
        `*${name}* 님이 이번 주에 작업할 것은 *${title}* 입니다.`
      );
      messageArray.push(`세부적인 작업 내용은 다음과 같습니다.\n${todo}`);
      messageArray.push(divisionBarMessage);
    });
    messageArray.push(":rocket: 이번주도 파이팅 해봅시다 !! :muscle:");

    await axios.post(`/api/slack`, {
      text: messageArray.join("\n"),
    });
  };

  return (
    <div>
      <Button onClick={handleApiTestClick}>
        노션 긁어와서 Slack으로 메시지 전송
      </Button>
    </div>
  );
}
