# Automation Tools
## Description

1. 전 주 일요일까지 Sprint를 작성하라고 Slack 채널에서 알림을 한다.
    - [Notion API](https://developers.notion.com/) + Slack 연동
2. 해당 주 월요일, Slack으로 모든 사람의 일정을 브리핑해준다.

## **Project Background**

“Sprint를 작성하자” 라고 팀 규칙을 정해도, 1-2주가 지나면 깜빡하게 됨.

개발에 몰두한 팀이라면 매일 Scrum을 작성하여, 이를 알림으로 설정해도 좋겠지만, 그렇지 않은 팀이라면 1주일 단위의 Sprint가 적합하다고 생각하였다.

## **Users**

- 1주일 단위로 1주일 간 할 일을 Sprint로 작성하는 팀의 팀원들
- 매주 할 일을 브리핑받으며 프로젝트에 대한 동기를 부여받고 싶은 팀원들

### 알게된 점

1. package.json에 “type”:”esmodule”을 추가하면 esmoule문법인 import/export를 사용할 수 있다.
    - 하지만, 이러한 경우 node.js문법인 require/module.exports와 혼용하여 사용하지 못한다.
2. .env는 기본 Node.js환경에서 실행하지 못한다. ‘dotenv’ 모듈을 설치하여 사용해야 한다.
    
    ```jsx
    const dotenv = require('dotenv')
    dotenv.config()
    ```

### 미션

- [ ]  매주 일요일 밤 12시, 자동으로 Notion내용이 정리되어 Slack봇으로 메시지 전송
- [ ]  /notion페이지 이동 후 버튼 클릭 시 notion글 긁어오기
- [ ]  /slack페이지 이동 후 메시지 입력 후 버튼 클릭 시 slack알림 봇 보내기
