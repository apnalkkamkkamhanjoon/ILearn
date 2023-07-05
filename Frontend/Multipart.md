# Multipart From Data

> HTTP 헤더에는 Content-Type을 명시해 줄 수 있다.(resource 들의 media type을 타나내기 위함이다. media type은 MIME type 과 동일하다.)
>
> Content-Type 으로 MIME type 중 하나인 multipart/form-data 으로 설정할 수 있다.
>
> 파일 업로드를 구현할 때, 클라이언트는 폼을 통해서 파일을 등록해서 전송하게 되며, 이를 처리하기 위한 서버는 멀티파트 메시지에 대해서 각 파트별로 분리하여 개별 파일의 정보를 얻게 된다.
