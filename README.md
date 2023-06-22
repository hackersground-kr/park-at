# `{{ Park-at }}` - `{{ HERE }}`

해커그라운드 해커톤에 참여하는 `{{ Park-at }}` 팀의 `{{ HERE }}`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

 필요한 것들
    - Android Studio가 설치되고, 빌드가 가능하도록 준비되어야 합니다.
    - Github Desktop이 설치되어 있어야 합니다.
    - Azure가 사용가능한 Microsoft, 또는 Github 계정이 필요합니다.
    
1. [https://github.com/hackersground-kr/park-at](https://github.com/hackersground-kr/park-at) 에 접속합니다.
2. 화면의 Code 버튼을 누르고, ‘Open with GitHub Desktop’ 버튼을 누릅니다.
    
3. 이런 화면이 나오면, ‘Local Path’ 부분에서 다운받을 경로를 지정하고, Clone을 눌러 코드를 받아옵니다.

4. Android Studio를 열어서, “해당 클론 경로/here” 폴더를 열어주고, Gradle Sync가 끝나고 설정이 완료될때까지 기다립니다. 다음은 완료된 화면입니다.

5. 상단 바의 Build → ‘Generate Signed Bundle or APK를 누르고, 아래의 창이 나타나면 APK를 선택 후, ‘Next’를 눌러줍니다.

6. 이런 창이 뜨면, “Create New…”를 눌러줍니다.

7. Key Store Path 부분에는 키 파일을 저장할 경로를, 위와 아래의 Password와 Confirm 모두 같은 비밀번호를 입력하고, 인증서에 영문명을 적은 후, ‘OK’를 눌러줍니다.
  
8. 그 후, 이 창이 나오면, release를 누른 후, ‘Create’를 누르면, Sign 된 배포용 ‘.apk’ 파일이 생성됩니다.

9. ‘Generate Signed APK’가 뜨고, 저 알람을 눌러보면 밑의 사진과 같은 탐색기가 열리고, ‘.apk’ 파일을 볼 수 있습니다.
    
10. [https://appcenter.ms/](https://appcenter.ms/) 에 접속하고, SIGN IN을 클릭, Microsoft 또는 Github Account로 로그인합니다.
    
11. 상단의 Add new를 누릅니다.
    
12. Add new app을 누르고, 다음과 같이 세팅한 후, 밑의 그림과 같이 세팅하고, Add new app을 누릅니다.
        
13. 그 후, 이런 창이 나오는데, Distribute를 누릅니다.
            
14. 그럼 나오는 창에서 ‘New release’를 누릅니다.
                
15. 다음으로 이런 창이 나오는데, 2번째 사진과 같이, 아까 만든 ‘.apk’ 파일을 첨부해줍니다. 그리고, ‘Next’를 누릅니다.
                    
16. 선택적으로 릴리즈 노트를 적고, ‘Next’를 누릅니다.
                        
17. 배포된 앱을 받은 그룹을 지정합니다. 지금은 기본 세팅된 그룹으로 진행합니다. 그후, ‘Next’를 누릅니다.
                            
18. 세팅을 최종 확인하고, 맞다면 ‘Distribute’를 누릅니다.
                                
19. 배포 완료되었습니다. 위의 디바이스 아이콘을 눌러 설치할 수 있습니다!


### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**

## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
