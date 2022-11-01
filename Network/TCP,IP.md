# 프로토콜(Protocol)
- 프로토콜은 서로 다른 기기들 간의 데이터 교환을 원활하게 수행할 수 있도록 표준화시켜 놓은 통신 규약이다.
- __프로토콜의 기본 요소__
    ```
    구문(Syntax) - 전송하고자 하는 데이터의 형식, 부호화, 신호 레벨 등을 규정함

    의미(Semantics) - 두 기기 간의 효율적이고 정확한 정보 전송을 위한 협조 사항과 오류 관리를 위한 제어 정보를 규정함

    시간(Timing) - 두 기기 간의 통신 속도, 메시지 순서 제어 등을 규정함
    ```

- 프로토콜의 기능 : 단편화와 재결합, 캡슐화, 흐름 제어, 오류 제어, 동기화, 순서 제어, 주소 지정, 다중화, 경로 제어, 전송 서비스 등

# TCP/IP(Transmission Control Protocol/Internet Protocol)
TCP/IP는 인터넷에 연결된 서로 다른 기종의 컴퓨터들이 데이터를 주고받을 수 있도록 하는 표준 프로토콜이다.
```
TCP(Transmission Control Protocol)
- OSI 7계층의 전송 계층에 해당함
- 신뢰성 있는 연결형 서비스를 제공함
- 패킷의 다중화, 순서 제어, 오류 제어, 흐름 제어 기능을 제공함

IP(Internet Protocol)
- OSI 7계층의 네트워크 계층에 해당함
- 데이터그램을 기반으로 하는 비연결형 서비스를 제공함
- 패킷의 분해/조립, 주소 지정, 경로 선택 기능을 제공함
```

# TCP/IP의 구조
<img src="img/TCP,IP.png" width="600px" height="350px"></img><br/>

```
응용 계층
- 응용 프로그램 간의 데이터 송, 수신 제공
- TELENET, FTP, SMTP, SNMP, DNS, HTTP 등

전송 계층
- 호스트들 간의 신뢰성 있는 통신 제공
- TCP, UDP, RTCP

인터넷 계층
- 데이터 전송을 위한 주소 지정, 경로 설정을 제공함
- IP, ICMP, IGMP, ARP, RARP, OSPF

네트워크 액세스 계층
- 실제 데이터(프레임)를 송, 수신하는 역할
- Ethernet, IEEE 802, HDLC, X.25, RS-232C, ARQ 등
```

# 주요 프로토콜
```
HTTP(HyperText Transfer Protocol)
- 웹(WWW)에서 HTML(Hyper Text Markup Language)로 작성된 하이퍼텍스트 문서를 전송하기 위한 표준 프로토콜임
- 1989년 버서느리가 WWW(World Wide Web)를 고안하면서 설계함
- HTTPS(HyperText Transfer Protocol Secure) : HTTP의 단점을 보완하고, 안전한 통신을 위해 보안이 강화된 버전으로, SSL/TLS의 인증, 암호화 기능을 지원함

TELNET
- 멀리 떨어져 있는 컴퓨터에 접속하여 자신의 컴퓨터처럼 사용할 수 있도록 해주는 서비스
- 프로그램을 실행하는 등 시스템 관리 작업을 할 수 있는 가상터미널(Virtual Terminal) 기능을 수행함

FTP(File Transfer Protocol)
- 컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고 받을 수 있도록 하는 원격 파일 전송 프로토콜

SMTP(Simple Mail Transfer Protocol)
- 전자 우편을 교환하는 서비스

SNMP(Simple Network Management Protocol)
- TCP/IP의 네트워크 관리 프로토콜로, 라우터나 허브 등 네트워크 기기의 네트워크 정보를 네트워크 관리 시스템에 보내는 데 사용되는 표준 통신 규약

DNS(DomainName System)
- 도메인 네임을 IP 주소로 매핑(Mapping)하는 시스템

SSH(Secure Shell)
- 다른 네트워크상의 컴퓨터에 원격 접속하거나 파일을 복사할 수 있게 해주는 응용 프로토콜로, 22번 포트를 사용함
- rsh, rcp, rlogin, rexec 및 TELNET, FTP 서비스 등을 대체하기 위한 네트워크 보안 도구로 사용됨

UDP(User Datagram Protocol)
- 데이터 전송 전에 연결을 설정하지 않는 비연결형 서비스를 제공함
- TCP에 비해 상대적으로 단순한 헤더 구조를 가지므로, 오버헤드가 적고, 흐름 제어나 순서 제어가 없어 전송 속도가 빠름

RTCP(Real-Time Control Protocol)
- RTP(Real-Time Transport Protocol) 패킷의 전송 품질을 제어하기 위한 제어 프로토콜로 데이터 전송을 모니터링하고 최소한의 제어와 인증 기능만을 제공함

ICMP(Internet Control Message Protocol, 인터넷 제어 메시지 프로토콜)
- IP와 조합하여 통신중에 발생하는 오류의 처리와 전송 경로 변경 등을 위한 제어 메시지를 관리하는 역할을 함
- 헤더는 8Byte로 구성됨

IGMP(Internet Group Management Protocol, 인터넷 그룹 관리 프로토콜)
- 멀티케스트를 지원하는 호스트나 라우터 사이에서 멀티캐스트 그룹 유지를 위해 사용됨

ARP(Address Resolution Protocol, 주소 분석 프로토콜)
호스트의 IP 주소를 호스트와 연결된 네트워크 접속 장치의 물리적 주소(Mac Address)로 바꿈

RARP(Reverse Address Resolution Protocol)
- ARP와 반대로 물리적 주소를 IP 주소로 변환하는 기능을 함

DHCP(Dynamic Host Configuration Protocol, 동적 호스트 구성 프로토콜)
- IP 주소 부족 문제를 해결하기 위해 만들어진 프로토콜
- IP 주소가 일정한 시간 동안만 유효하도록 임대함으로써 사용 가능한 IP 주소의 개수보다 더 많은 컴퓨터가 IP 주소를 활용할 수 있음
```
