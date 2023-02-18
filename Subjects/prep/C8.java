import java.util.*;

class Main {
    public static int numDifferentIntegers(String word) {

	char[] chararray = word.toCharArray();
	Set<Integer>set = new HashSet<>();
	int sum=-1;

	for(int i=0;i<chararray.length;i++)
	{
		if(Character.isDigit(chararray[i]))
		{
			if(sum==-1)
				sum=0;
			sum = sum*10 + (chararray[i] - '0');
		}
		else
		{
			chararray[i] = ' ';
			if(sum!=-1)
			{
				set.add(sum);
				sum = -1;
			}
		}
	}
	if(sum!=-1)
		set.add(sum);

	return set.size();
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String word = sc.nextLine();
    System.out.println(numDifferentIntegers(word));
  }
}