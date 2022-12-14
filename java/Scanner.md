# Scanner
```
import java.util.Scanner;	// Scanner 클래스 호출
 
public class Main {
	public static void main(String[] args) {
 
		Scanner in = new Scanner(System.in);	// Scanner 객체 생성
 
		byte a = in.nextByte(); 		// byte 형 입력 및 리턴
		short b = in.nextShort(); 		// short 형 입력 및 리턴
		int c = in.nextInt(); 			// int 형 입력 및 리턴
		long d = in.nextLong(); 		// long 형 입력 및 리턴
 
		float e = in.nextFloat(); 		// float 형 입력 및 리턴
		double f = in.nextDouble(); 	// double 형 입력 및 리턴
 
		boolean g = in.nextBoolean(); 	// boolean 형 입력 및 리턴
 
		String h = in.next(); 			// String 형 입력 및 리턴 (공백을 기준으로 한 단어를 읽음)
		String i = in.nextLine(); 		// String 형 입력 및 리턴 (개행을 기준으로 한 줄을 읽음)
	}
 
}
```
