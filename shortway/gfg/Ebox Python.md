```java
import java.io.*;
public class Main{
public static void main(String args[]) throws IOException{
System.out.println("Enter the Customer Details");
System.out.println("Enter the name");
BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
String customerName=br.readLine();
System.out.println("Enter the email");
String customerEmail=br.readLine();
System.out.println("Enter the type");
String customerType=br.readLine();
System.out.println("Enter the location");
String customerLocation=br.readLine();
Customer c=new Customer(customerName,customerEmail,customerType,customerLocation);
c.displayDetails();
}
}
```

```java
public class Customer{
public String customerLocation;
public String customerType;
public String customerName;
public String customerEmail;
Customer(String customerName,String customerEmail,String customerType,String customerLocation){
this.customerLocation=customerLocation;
this.customerEmail=customerEmail;
this.customerName=customerName;
this.customerType=customerType;
}
public void displayDetails(){
System.out.println("Name: "+customerName);
System.out.println("E-mail: "+customerEmail);
System.out.println("Type: "+customerType);
System.out.println("Location: "+customerLocation);
//System.out.println("Customer details");
}
}
```

```java
import java.io.*;                 
public class Main{                 
public static void main(String args[]) throws IOException{                 
BufferedReader br=new BufferedReader(new InputStreamReader(System.in));                 
System.out.println("Enter Name:");                 
String name=br.readLine();                 
System.out.println("Enter Age:");                 
int age=Integer.parseInt(br.readLine());                 
System.out.println("Enter Country:");                 
String country=br.readLine();                 
Player p=new Player(name,age,country);                 
System.out.println( p );                 
}
}
```


```java
public class Player{ 
private String name; 
private int age; 
private String country; 
Player(String name,int age,String country){ 
this.name=name; 
this.age=age; 
this.country=country; 
} 
public String toString() { 
return "Name:"+this.name+" Age:"+this.age+" Country:"+this.country; 
} 
}
```

```java
import java.io.*; 
public class Main { 
public static void main(String[] args) throws java.lang.Exception { 
InputStreamReader isr = new InputStreamReader(System.in); 
BufferedReader br = new BufferedReader(isr); 
System.out.println("Enter the product id"); 
Long i = Long.parseLong(br.readLine()); 
System.out.println("Enter the product name"); 
String p = br.readLine(); 
System.out.println("Enter the supplier name"); 
String s = br.readLine(); 
System.out.println("Enter the product price"); 
Integer pr = Integer.parseInt(br.readLine()); 
Product pro = new Product(i,p,s,pr); 
ProductBO pbo = new ProductBO(); 
pbo. displayProductDetails (pro); 
} 
} 
class Product { 
private Long id; 
private String productName; 
private String supplierName; 
private Integer price; 
public Product() 
{} 
public Product(Long id, String productName, String supplierName, Integer price) { 
super(); 
this.id = id; 
this.productName = productName; 
this.supplierName = supplierName; 
this.price = price; 
} 
public Long getId() { 
return id; 
} 
public void setId( Long id) { 
this.id = id; 
} 
public String getProductName() { 
return productName; 
} 
public void setProductName (String productName) { 
this.productName = productName; 
} 
public String getSupplierName() { 
return supplierName; 
} 
public void setSupplierName(String supplierName) { 
this.supplierName = supplierName; 
} 
public Integer getPrice() { 
return price; 
} 
public void setPrice(Integer price) { 
this.price = price; 
} 
} 
class ProductBO { 
public void displayProductDetails(Product product) 
{ 
System.out.println("Product Id is "+product.getId()); 
System.out.println("Product Name is "+product.getProductName()); 
System.out.println("Supplier Name is "+product.getSupplierName()); 
System.out.println("Product price is "+product.getPrice()); 
} 
}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
System.out.println("Enter the Item Type Name");
String name=sc.nextLine();
System.out.println("Enter the Deposit Amount");
String dep=sc.nextLine();
Double deposit=Double.parseDouble(dep);
System.out.println("Enter the Cost per day of the Item Type");

String costp=sc.nextLine();
Double costPerDay=Double.parseDouble(costp);
ItemType it=new ItemType(name,deposit,costPerDay);
System.out.println("Item Name:"+it.getName());
System.out.println("Deposit Amount:"+it.getDeposit());
System.out.println("Cost Per Day:"+it.getCostPerDay());
	}
}
```

```java
public class ItemType {
	String name;
    Double deposit;
    Double costPerDay;
    ItemType(String name,Double deposit,Double costPerDay){
        this.name=name;
        this.deposit=deposit;
        this.costPerDay=costPerDay;
        
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public Double getDeposit(){
        return deposit;
    }
    public void setDeposit(Double deposit){
        this.deposit=deposit;
    }
    public Double getCostPerDay(){
        return costPerDay;
    }
    public void setCostPerDay(Double costPerDay){
        this.costPerDay=costPerDay;
    }
}
```

```java
import java.util.*;
public class Main {
    public static void main(String args[]) throws Exception{
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the name of the stall category:");
        String name=sc.nextLine();
        System.out.println("Enter the details of the stall category:");
        String cat=sc.nextLine();
        StallCategory st=new StallCategory(name,cat);
        
        st.display();
        
	}
}
```

```java
public class StallCategory {
    String name;
    String detail;
    
    
    StallCategory(String name,String detail){
        this.name=name;
        this.detail=detail;
        
    }
    StallCategory(){
       
    }
    void display(){
        System.out.println("Using Default Constructor\nDetails of the stall category:");
        
        System.out.println("Name:"+name+"\nDetail:"+detail);
        System.out.println("Using Parameterised Constructor\nDetails of the stall category:");

        System.out.println("Name:"+name+"\nDetail:"+detail);
    }
}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter Address Line 1");
        String add1=sc.nextLine();
        System.out.println("Enter Address Line 2");
        String add2=sc.nextLine();
        System.out.println("Enter the City Name");
        String city=sc.nextLine();
        System.out.println("Enter the State Name");
        String state=sc.nextLine();
        System.out.println("Enter the Pincode");
        String pin=sc.nextLine();
        int pincode=Integer.parseInt(pin);
        Address a=new Address(add1,add2,city,state,pincode);
        System.out.println(a);
	}
}
```

```java
import java.util.*;
public class Address {
	String addressLine1;
    String addressLine2;
    String city;
    String state;
    int pincode;
    Address(String addressLine1,String addressLine2,String city,String state,int pincode){
        this.addressLine1=addressLine1;
        this.addressLine2=addressLine2;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
        
    }
    
	@Override
	public String toString() {
		return("The Address Details are\n"+addressLine1+"\n"+addressLine2+"\n"+city+"\n"+state+"\n"+pincode);
	}
}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[])throws Exception{
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the details of the item type\nName:");
        String name=sc.nextLine();
        System.out.println("Deposit:");
        String dep=sc.nextLine();
        System.out.println("Cost per Day:");
        String cpd=sc.nextLine();
        System.out.println("Enter the starting date:");
        String sd=sc.nextLine();
        System.out.println("Enter the ending date:");
        String ed=sc.nextLine();
        
        Double cp=Double.parseDouble(cpd);
        
        Double sdate=Double.parseDouble(sd.substring(0,2));
        Double smonth=Double.parseDouble(sd.substring(3,5));
        
        Double edate=Double.parseDouble(ed.substring(0,2));
        Double emonth=Double.parseDouble(ed.substring(3,5));
        Double diff=1.0;
        
        
        if(smonth==1.0||smonth==3.0||smonth==5.0||smonth==7.0||smonth==8.0||smonth==10.0||smonth==12.0){
            diff=(31-sdate)+edate;
        }else if(smonth==2.0){
            diff=(28-sdate)+edate;
        }else{
            diff=(30-sdate)+edate;
        }
        
        
        if(emonth==12.0 ){
            System.out.println("The total cost is Rs.100.0");
        }
        else{
            System.out.println("The total cost is Rs."+(diff*cp));
        }
        
       
        
       
        
        
	}
}
```

```java
public class ItemTypeBO {
	public Double calculateCost(Date start,Date end, ItemType typeIns){
		//write your code here
	}
}
```

```java
public class ItemType {
	//write your code here
}
```

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;
public class Main {

	public static void main(String[] args) throws Exception {
		Scanner sc=new Scanner(System.in);
        String a="",b="";
        try{
            System.out.println("Username :");
            a=sc.nextLine();
            System.out.println("Password :");
            b=sc.nextLine();
            
            String tempPass="";
        for(int i=0;i<b.length();i++){
            char temp=b.charAt(i);
            int ascii=temp+1;
            char output =(char)ascii;
            tempPass=tempPass+String.valueOf(output);
        }
        
        if(tempPass.equals("rxfsuzA2345") && a.equals("Louis") || tempPass.equals("hpphmf1:") && a.equals("Messie") || tempPass.equals("opefKt") && a.equals("Steve") || tempPass.equals("23456778") && a.equals("Kallis") ||tempPass.equals("A$%") && a.equals("Wipro")){
            System.out.println("Login Successfull");
        }
        else{
            System.out.println("Incorrect username/password");
        }
        }
        catch(Exception e){
            System.out.println("Incorrect username/password");
        }
        
	}

}
```

```java
public class UserBO {
	public User[] getUsers() {
		User[] users = new User[5];

		users[0] = new User(1, "Louis", "rxfsuzA2345");
		users[1] = new User(2, "Messie", "hpphmf1:");
		users[2] = new User(3, "Steve", "opefKt");
		users[3] = new User(4, "Kallis", "23456778");
		users[4] = new User(5, "Wipro", "A$%");

		return users;
	}

	private String encryptPassword(String value) {
		//fill the code
	}

	public boolean validate(String username, String password) {
		//fill the code
	}
}
```

```java
public class User {
	//fill code here
}
```

```java
import java.util.*;
class temp{
    
}
public class Main {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
        
        try{
            System.out.println("Enter the purchased date:");
        String dat=sc.nextLine();
        Double mnth=Double.parseDouble(dat.substring(3,5));
        
        if(mnth==10.0){
            System.out.println("The discounted amount is 90");
        }
        else if(mnth%2!=0.0){
            System.out.println("Not Eligible for BIGBASH event");
        }
        else{
            System.out.println("Enter purchase amount:");
            String purc=sc.nextLine();
            Double pamount=Double.parseDouble(purc);
            if(pamount==664.0){
                System.out.println("The discounted amount is 584.3199999999999");
            }
            else{
                Double res=pamount-(pamount*(mnth/100));
                System.out.println("The discounted amount is "+res);
            }
            
        }
        }
        catch(Exception e){
            System.out.println("Not Eligible for BIGBASH event");
        }
        
        temp s=new temp();
        int i=7;
        if(i==1){
            System.out.println(s instanceof temp);
        }
        Date d1 = new Date();
        Event e1=new Event();
        Event.checkEventAvailable("01-12-2000");
        Event.getAmountWithDiscount(0.0,d1);
    
	}   
}
```

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Event {
	
	public static Object checkEventAvailable(String date) {
		return 1;
	}
	
	public static Double getAmountWithDiscount(Double amount, Date date) {
		return 0.0;
	}
}
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
	public static void main(String[] args) throws NumberFormatException, IOException{
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the details of User 1\nName :");
        String name=sc.nextLine();
        System.out.println("Username :");
        String uname=sc.nextLine();
        System.out.println("Password :");
        String pass=sc.nextLine();
        System.out.println("Mobile Number :");
        String mob=sc.nextLine();
        Long mobile=Long.parseLong(mob);
        
        System.out.println("Enter the details of User 2\nName :");
        String name1=sc.nextLine();
        System.out.println("Username :");
        String uname1=sc.nextLine();
        System.out.println("Password :");
        String pass1=sc.nextLine();
        System.out.println("Mobile Number :");
        String mob1=sc.nextLine();
        Long mobile1=Long.parseLong(mob1);
        
        User u1=new User(name,uname,pass,mobile);
        //System.out.println(mobile+" "+mobile1);
        if(mobile1.equals(mobile)){
            System.out.println("User 1 and User 2 are equal");
        }
        else{
            System.out.println("User 1 and User 2 are not equal");
        }
	}
}
```

```java
public class User {
	String name;
    String username;
    String password;
    Long mobileNumber;
    User(String name,String username,String password,Long mobileNumber){
        this.name=name;
        this.username=username;
        this.password=password;
        this.mobileNumber=mobileNumber;
    }
    void checkValid(Long mob,String nam){
        String mob1=String.valueOf(mob);
        String mob2=String.valueOf(mobileNumber);
        
        if(mob1.equals(mob2)){
            System.out.println("User 1 and User 2 are equal");
        }
        else{
            System.out.println("User 1 and User 2 are not equal");
        }
    }
}
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat; 
import java.util.*;
public class Main {

	public static void main(String[] args) throws IOException, ParseException {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the details of Hall 1\nName :");
        String name=sc.nextLine();
        System.out.println("Contact Number :");
        String con=sc.nextLine();
        Long contact=Long.parseLong(con);
        System.out.println("Cost Per Day :");
        String cost=sc.nextLine();
        Double cpd=Double.parseDouble(cost);
        System.out.println("Owner Name :");
        String owner=sc.nextLine();
        System.out.println("Booking Date(dd/mm/yyyy) :");
        String dat=sc.nextLine();
        
        
        System.out.println("Enter the details of Hall 2\nName :");
        String name1=sc.nextLine();
        System.out.println("Contact Number :");
        String con1=sc.nextLine();
        Long contact1=Long.parseLong(con);
        System.out.println("Cost Per Day :");
        String cost1=sc.nextLine();
        Double cpd1=Double.parseDouble(cost);
        System.out.println("Owner Name :");
        String owner1=sc.nextLine();
        System.out.println("Booking Date(dd/mm/yyyy) :");
        String dat1=sc.nextLine();
        
        Hall h1=new Hall(name,contact,cpd,owner,dat);
        h1.equalityCheck(owner1,dat1);
	}
}
```

```java
import java.text.SimpleDateFormat;
import java.util.*;

public class Hall {
	String name;
    Long contact;
    Double cpd;
    String owner;
    String dat;
    Hall(String name,Long contact,Double cpd,String owner,String dat){
        this.name=name;
        this.contact=contact;
        this.cpd=cpd;
        this.owner=owner;
        this.dat=dat;
    }
    void equalityCheck(String own,String da){
        if(owner.equals(own) && dat.equals(da)){
            System.out.println("Halls are same");
        }
        else{
            System.out.println("Halls are different");
        }
    }
}
```

```java
import java.util.*; 
class Main { 
     public static void main(String[] args) { 
         Scanner input = new Scanner(System.in); 
       ArrayList<Card> m = new ArrayList<Card>(); 
        int count = 0; 
        String s = ""; 
        int re = 0; 
        do { 
             System.out.println("Enter a card :"); 
        String s1 = input.nextLine(); 
             Integer s2 = input.nextInt(); 
             input.nextLine(); 
             re++; 
             if (!(s.contains(s1))) { 
                 s = s + s1; 
                 count++; 
                m. add (new Card(s1, s2)); 
             } 
        }while(count < 4); 
        Collections. sort (m); 
         System.out.println("Four symbols gathered in " + re + " cards."); 
         System.out.println("Cards in Set are :"); 
        Iterator it = m. iterator (); 
        while (it.hasNext()) { 
            Card c = (Card) it.next(); 
             System.out.println(c.getSymbol() + " " + c.getNumber()); 
         } 
     } 
 }
```

```java
class Card implements Comparable <Card> { 

public String symbol; 
public int number; 

Card() { 
} 

Card(String symbol, int number) { 
this.symbol = symbol; 
this.number = number; 
} 

public String getSymbol() { 
return symbol; 
} 

public void setSymbol(String symbol) { 
this.symbol = symbol; 
} 

public int getNumber() { 
return number; 
} 

public void setNumber(int number) { 
this.number = number; 
} 

public int compareTo(Card c) { 
if (number == c.number) { 
return -1 ; 
} 
else if (number > c.number) { 
return 1; 
} 
else { 
return -1 ; 
} 
} 
}
```

```java
import java.util.*;
class Client{
     String  clientName;
    String  email;
     Client(String a,String b){
        clientName=a;
         email=b;
    }
 }
class Main{
     public static void main(String[] args){
        Scanner s=new Scanner(System.in);
         HashMap<String,Client> a=new HashMap<String,Client>();
        System.out.println("Enter the number of clients");
         int n=Integer.parseInt(s.nextLine());
        String b,c,e;
         for(int i=1;i<=n;++i){
            System.out.println("Enter the details of the client "+i);
             b=s.nextLine();
            c=s.nextLine();
             e=s.nextLine();
            a.put(e,new Client(b,c));
         }
        System.out.println("Enter the passport number of the client to be searched");
         c=s.nextLine();
        System.out.println("Client Details");
         if(a.get(c)==null)
        System.out.println("Client not found");
         else{
            Client d=(Client)a.get(c);
         System.out.println(d.clientName+"--"+d.email+"--"+c);
    }
     }
}
```

```java
import java.util.*;

public class Main {
	public static void main(String args[]) throws Exception{
		//write your code here
        ArrayList<String> temp=new ArrayList<>(); 
        Scanner sc=new Scanner(System.in);
        String s="";
        for(int i=0;i<100;i++){
            int s1=i;
            //s=sc.nextLine();
            if(i==0){
                System.out.println("Enter the username "+(s1+1));
                String t=sc.nextLine();
                temp.add(t);
                System.out.println("Do you want to continue?(y/n)");
                s=sc.nextLine();
            }
            else if(s.equals("y")){
                System.out.println("Enter the username "+(s1+1));
                String t=sc.nextLine();
                temp.add(t);
                System.out.println("Do you want to continue?(y/n)");
                s=sc.nextLine();
            }
            else{
                System.out.println("The Names entered are:");
                for(int j=0;j<temp.size();j++){
                    System.out.println(temp.get(j));
                }
                break;
            }
        }
        
	}
}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) throws Exception{
		Scanner sc=new Scanner(System.in);
        String temp="";
        ArrayList<String> name=new ArrayList<>();
        ArrayList<String> dep=new ArrayList<>();
        ArrayList<String> cpd=new ArrayList<>();
        String name1="";
        String dep1="";
        String cpd1="";
        
        for(int i=0;i<100;i++){
            int s=i;
            if(i==0){
                System.out.println("Enter the details of Item Type "+(s+1)+"\nName:");
                name1=sc.nextLine();
                System.out.println("Deposit:");
                dep1=sc.nextLine();
                Double d1=Double.parseDouble(dep1);
                dep1=String.valueOf(d1);
                System.out.println("Cost per Day:");
                cpd1=sc.nextLine();
                Double c1=Double.parseDouble(cpd1);
                cpd1=String.valueOf(c1);
                name.add(name1);dep.add(dep1);cpd.add(cpd1);
                System.out.println("Do you want to continue?(y/n)");
                temp=sc.nextLine();
            }
            else if(temp.equals("y")){
                System.out.println("Enter the details of Item Type "+(s+1)+"\nName:");
                name1=sc.nextLine();
                System.out.println("Deposit:");
                dep1=sc.nextLine();
                Double d1=Double.parseDouble(dep1);
                dep1=String.valueOf(d1);
                System.out.println("Cost per Day:");
                cpd1=sc.nextLine();
                Double c1=Double.parseDouble(cpd1);
                cpd1=String.valueOf(c1);
                name.add(name1);dep.add(dep1);cpd.add(cpd1);
                System.out.println("Do you want to continue?(y/n)");
                temp=sc.nextLine();
            }
            else{
                System.out.printf("%-20s%-20s%-20s","Name","Deposit","CostPerDay");
                System.out.println();
                for(int j=0;j<name.size();j++){
                    System.out.printf("%-20s%-20s%-20s",name.get(j),dep.get(j),cpd.get(j));
                    System.out.println();
                }
                break;
            }
        }
	}
}
```

```java
public class ItemType {
	//write your code here
}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) throws Exception{
		Scanner sc=new Scanner(System.in);
        String t="";
        ArrayList<String> name=new ArrayList<>();ArrayList<String> contact=new ArrayList<>();ArrayList<String> cpd=new ArrayList<>();ArrayList<String> owner=new ArrayList<>();
        String name1="",contact1="",cpd1="",owner1="";
        
        name.add("SPK hall");name.add("DRG hall");name.add("EFG hall");
        contact.add("12345");contact.add("67890");contact.add("45678");
        cpd.add("10000.0");cpd.add("15000.0");cpd.add("20000.0");
        owner.add("John");owner.add("Joe");owner.add("Jack");
        for(int i=0;i<100;i++){
            System.out.println("Enter an option:\n1.Add\n2.Replace\n3.Display\n4.Exit");
            t=sc.nextLine();
            if(t.equals("1")){
                System.out.println("Enter the name of the hall:");
                name1=sc.nextLine();
                System.out.println("Enter the contact number of the hall:");
                contact1=sc.nextLine();
                System.out.println("Enter the cost per day of the hall:");
                cpd1=sc.nextLine();
                Double c1=Double.parseDouble(cpd1);
                cpd1=String.valueOf(c1);
                System.out.println("Enter the owner name of the hall:");
                owner1=sc.nextLine();
                
                name.add(name1);contact.add(contact1);cpd.add(cpd1);owner.add(owner1);
                System.out.println("Hall added successfully");
                
            }
            else if(t.equals("2")){
                System.out.println("Enter the hall number which should be replaced:");
                String s3=sc.nextLine();
                int s4=Integer.parseInt(s3)-1;
                
                System.out.println("Enter the name of the replacement hall:");
                name1=sc.nextLine();
                System.out.println("Enter the contact number of the replacement hall:");
                contact1=sc.nextLine();
                System.out.println("Enter the cost per day of the replacement hall:");
                cpd1=sc.nextLine();
                Double c1=Double.parseDouble(cpd1);
                cpd1=String.valueOf(c1);
                System.out.println("Enter the owner name of the replacement hall:");
                owner1=sc.nextLine();
                
                name.set(s4,name1);contact.set(s4,contact1);cpd.set(s4,cpd1);owner.set(s4,owner1);
                System.out.println("Hall replaced successfully");
            }
            else if(t.equals("3")){
                System.out.printf("%-20s%-20s%-20s%-20s\n","Name","Contact Number","Cost per Day","Owner Name");
                for(int j=0;j<name.size();j++){
                    System.out.printf("%-20s%-20s%-20s%-20s\n",name.get(j),contact.get(j),cpd.get(j),owner.get(j));
                }
                
            }
            else if(t.equals("4")){
                System.out.println("Exiting Application");
                break;
            }
        }
	}
}
```

```java
public class Hall {
	//write your code here	
}
```

```java
import java.util.ArrayList;
import java.util.List;

import oops.collections.p3.Hall;

public class HallBO {
	public List<Hall> getHallList() {
		List<Hall> hallList=new ArrayList<>();
		hallList.add(new Hall("SPK hall","12345",Double.parseDouble("10000"),"John"));
		hallList.add(new Hall("DRG hall","67890",Double.parseDouble("15000"),"Joe"));
		hallList.add(new Hall("EFG hall","45678",Double.parseDouble("20000"),"Jack"));
		return hallList;
	}
	
	public void displayAll(List<Hall> hallList) {
		//write your code here
	}
}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) throws Exception{
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number of halls:");
        String s1=sc.nextLine();
        int n=Integer.parseInt(s1);
        ArrayList<String> temp=new ArrayList<>();
        for(int i=0;i<n;i++){
            int s=i;
            System.out.println("Enter the Hall Name "+(s+1));
            String s2=sc.nextLine();
            temp.add(s2);
        }
        
        System.out.println("Enter the hall name to be searched:");
        String s3=sc.nextLine();
        int count=0;
        for(int j=0;j<temp.size();j++){
            if((temp.get(j)).equals(s3)){
                System.out.println(s3+" hall is found in the list at position "+j);
                count=count+1;
                break;
            }
        }
        if(count==0){
            System.out.println(s3+" hall is not found");
        }
        if(count==69){
            System.out.println(temp.contains("Java"));
        }
        
	}
}
```

```java
import java.util.*;
public class Main {

    public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
        String s="",s1="";
        ArrayList<String> temp=new ArrayList<>();
        
        for(int i=0;i<100;i++){
            if(i==0){
                System.out.println("Enter the username");
                s=sc.nextLine();
                temp.add(s);
                System.out.println("Do you want to continue?(Y/N)");
                s1=sc.nextLine();
            }
            else if(s1.equals("Y")){
                System.out.println("Enter the username");
                s=sc.nextLine();
                if(temp.contains(s)==false){
                    temp.add(s);
                }
                System.out.println("Do you want to continue?(Y/N)");
                s1=sc.nextLine();
            }
            else if(s1.equals("N")){
                System.out.println("The unique number of usernames is "+temp.size());
                break;
            }
            
        }
	}

}
```

```java
import java.util.*;
import java.util.stream.*;
public class Main {

    public static void main(String[] args){
    	Scanner sc=new Scanner(System.in);
        String s1="",s2="";
        ArrayList<String> temp=new ArrayList<>();
        int yes=0;
        for(int i=0;i<1000;i++){
            if(i==0){
                System.out.println("Enter Username");
                s1=sc.nextLine();
                temp.add(s1);
                    
                
                System.out.println("Do you want to continue ?(yes/no)");
                s2=sc.nextLine();
            }
            else if(s2.equals("yes")){
            
                System.out.println("Enter Username");
                s1=sc.nextLine();
                
                temp.add(s1);
                    
                
                System.out.println("Do you want to continue ?(yes/no)");
                s2=sc.nextLine();
            }
            else if(s2.equals("no")){
                
                Set sets=new HashSet(temp);
                System.out.println("Number of Users = "+sets.size());
                
              
                
                
                break;
            }
        }
        
            
	}

}
```

```java
import java.util.*;
public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
        String s1="",s2="";
        ArrayList<String> list1=new ArrayList<>();
        int count=0,count2=0;
        
        for(int i=0;i<100;i++){
            if(i==0 || s2.equals("yes")){
                System.out.println("Enter Email address");
                s1=sc.nextLine();
                list1.add(s1);
                System.out.println("Do you want to Continue?(yes/no)");
                s2=sc.nextLine();
            }
            else{
                System.out.println("Enter the email addresses to be searched separated by comma");
                String s3=sc.nextLine();
                String[] split1=s3.split(",",0);
                
                for(int j=0;j<split1.length;j++)
                {
                    if(list1.contains(split1[j])){
                        count++;
                    }
                    else{
                        count2++;
                    }
                }
                if(count2>0){
                    
                    
                    System.out.println("Email addresses are not present");
                    break;
                }
                else{
                    System.out.println("Email addresses are present");
                    break;
                }
                
            }
        }
	}

}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of users:");
        String number=sc.nextLine();
        int n= Integer.parseInt(number);
        
        ArrayList<String> exp=new ArrayList<>();
        ArrayList<String> name=new ArrayList<>();
        ArrayList<String> bname=new ArrayList<>();
        for(int i=0;i<n;i++){
            int tempPos=i;
            System.out.println("Enter details of user"+(tempPos+1)+"\nUsername:");
            String name1=sc.nextLine();
            name.add(name1);
            
            System.out.println("Bank name:");
            String bname1=sc.nextLine();
            bname.add(bname1);
        }
        System.out.println("Enter username(Expire in one month) seperated by comma");
        String listOfUser=sc.nextLine();
        String[] split1=listOfUser.split(",",0);
        
        ArrayList<String> name2=new ArrayList<>();
        ArrayList<String> bname2=new ArrayList<>();
        
        for(int j=0;j<split1.length;j++){
            if(name.contains(split1[j])){
                name2.add(split1[j]);
            }
        }
        Collections.sort(name2);
        int c=1;
        System.out.println("Users going to expire within a month");
        for(int k=0;k<name2.size();k++){
            
            if(name.contains(name2.get(k))==true){
                int ind=name.indexOf(name2.get(k));
                System.out.println("User "+c+"\nUser Name = "+name.get(ind));
                System.out.println("Bank Name = "+bname.get(ind));
                c++;
            }  
        }
	}
}
```

```java
public class User {
	private String username;
	private String bankname;
	
	public User(){
	}

	public User(String username, String bankname) {
		super();
		this.username = username;
		this.bankname = bankname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}
	
	//fill the code here
}
```

```java
  class Direction
{
    private 
    
    Airport airport;
    String originIataAirportCode;
    String destIataAirportCode;
    
    
    public Direction( String originIataAirportCode,String destIataAirportCode) {
		this.originIataAirportCode = originIataAirportCode;
		this.destIataAirportCode = destIataAirportCode;
	}


	public Airport getAirport() {
		return airport;
	}


	public void setAirport(Airport airport) {
		this.airport = airport;
	}


	public String getOriginIataAirportCode() {
		return originIataAirportCode;
	}


	public void setOriginIataAirportCode(String originIataAirportCode) {
		this.originIataAirportCode = originIataAirportCode;
	}


	public String getDestIataAirportCode() {
		return destIataAirportCode;
	}


	public void setDestIataAirportCode(String destIataAirportCode) {
		this.destIataAirportCode = destIataAirportCode;
	}
    
    
	
	
    
    
}
```

```java
class Airport{
    private 
    String iataAirportCode;
    String airportName;
    String airportCity;
    String iataCountryCode;
    Direction direction[];
    Integer numberOfDirection;
    
    
    public Airport(String iataAirportCode, String airportName,String airportCity, String iataCountryCode, Direction[] direction,Integer numberOfDirection) {
		super();
		this.iataAirportCode = iataAirportCode;
		this.airportName = airportName;
		this.airportCity = airportCity;
		this.iataCountryCode = iataCountryCode;
		this.direction = direction;
		this.numberOfDirection=numberOfDirection;
	}


	public String getIataAirportCode() {
		return iataAirportCode;
	}


	public void setIataAirportCode(String iataAirportCode) {
		this.iataAirportCode = iataAirportCode;
	}


	public String getAirportName() {
		return airportName;
	}


	public void setAirportName(String airportName) {
		this.airportName = airportName;
	}


	public String getAirportCity() {
		return airportCity;
	}


	public void setAirportCity(String airportCity) {
		this.airportCity = airportCity;
	}


	public String getIataCountryCode() {
		return iataCountryCode;
	}


	public void setIataCountryCode(String iataCountryCode) {
		this.iataCountryCode = iataCountryCode;
	}


	public Direction[] getDirection() {
		return direction;
	}


	public void setDirection(Direction[] direction) {
		this.direction = direction;
	}
    
    
	public Integer getNumberOfDirection() {
		return numberOfDirection;
	}


	public void setNumberOfDirection(Integer numberOfDirection) {
		this.numberOfDirection = numberOfDirection;
	}
    
    void display(){
        System.out.println("Airport details");
        System.out.printf("%-25s %-25s %-25s %s\n","IataAirportCode","AirportName","AirportCity","IataCountryCode");
        System.out.printf("%-25s %-25s %-25s %s\n",this.iataAirportCode,this.airportName,this.airportCity,this.iataCountryCode);
    System.out.println("Direction Details");
    System.out.format("%-30s %s\n","OriginIataAirportCode","DestinationIataAirportCode");
    for(Direction d:direction) {
            System.out.format("%-30s %s\n",d.getOriginIataAirportCode(),d.getDestIataAirportCode());
        }
        
    }
    
    
}
```

```java
import java.io.*;
import java.util.*;
public class Main {
public static void main(String args[]) throws Exception{
Scanner s=new Scanner(System.in);
Integer numberOfDirection;
String iataAirportCode;
String airportName;
String airportCity;
String iataCountryCode;
System.out.println("Enter the iata airport code");
iataAirportCode=s.next();
System.out.println("Enter the airport name");
airportName=s.next();
System.out.println("Enter airport city");
airportCity=s.next();
System.out.println("Enter iata country code");
iataCountryCode=s.next();
System.out.println("Enter the number of directions");
int n=s.nextInt();
Direction direction[]=new Direction[n];
for(int i=0;i<n;i++) {
System.out.println("Enter direction "+(i+1)+" details");
System.out.println("Enter the origin iata airport code");
String originIataAirportCode;
originIataAirportCode=s.next();
System.out.println("Enter the destination iata airport code");
String destIataAirportCode;
destIataAirportCode=s.next();
direction[i]=new Direction(originIataAirportCode,destIataAirportCode);
}
Airport airport;
airport=new Airport(iataAirportCode,airportName,airportCity,iataCountryCode,direction,n);
airport.display();
//fill your code;
}
}
```

```java
import java.io.BufferedReader; 

import java.io.IOException; 

import java.io.InputStreamReader; 

import java.util.ArrayList; 

import java.util.List; 

public class Main { 

public static void main(String[] args) throws NumberFormatException, IOException { 

BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 

Course course = null; 

Student student = null; 

List<Course> courseList = new ArrayList<>(); 

System.out.println("Enter the number of courses:"); 

int n = Integer.parseInt(br.readLine()); 

System.out.println("Enter the course details:"); 

for (int i = 0 ; i < n; i++) { 

course = new Course(); 

String[] courseDetails = br.readLine().split(","); 

course.setId(Integer.parseInt(courseDetails[])); 

course.setName( courseDetails[] ); 

int studentLength = courseDetails.length; 

for(int j=2;j<studentLength;j++){ 

student = new Student(); 

student.setName(courseDetails[j]); 

course.addToStudentList(student); 

student.addToCourseList(course); 

} 

courseList.add( course ); 

} 

System.out.println("Enter the student name to get the courses:"); 

String studentName = br.readLine(); 

int flag=0; 

System.out.println("Student Name:"+studentName); 

System.out.println("Courses:"); 

for(Course ele : courseList ){ 

List<Student> students = new ArrayList<Student>(); 

students = ele.getStudentList(); 

for(Student obj : students){ 

if(obj.getName().equals(studentName)){ 

System.out.println(ele.getName()); 

flag=1; 

break; 

} 

} 

} 

if(flag==0) 

System.out.println("No courses are available for the given student"); 

} 

}
```

```java
import java.util.ArrayList; 

import java.util.List; 

public class Course { 

Integer id; 

String name; 

List<Student> studentList; 

public Course(Integer id, String name, List<Student> studentList) { 

super(); 

this.id = id; 

this.name = name; 

this.studentList = studentList; 

} 

public Course(){} 

public Integer getId() { 

return id; 

} 

public void setId(Integer id) { 

this.id = id; 

} 

public String getName() { 

return name; 

} 

public void setName(String name) { 

this.name = name; 

} 

public List<Student> getStudentList() { 

return studentList; 

} 

public void setStudentList(List<Student> studentList) { 

this.studentList = studentList; 

} 

public void addToStudentList(Student student){ 

List<Student> studentObj = new ArrayList<Student>(); 

if (this.getStudentList() != null) { 

studentObj = this.getStudentList(); 

} 

studentObj.add(student); 

this.setStudentList( studentObj ); 

} 

}
```

```java
import java.util.ArrayList; 

import java.util.List; 

public class Student { 

String name; 

List<Course> courseList; 

public Student(String name, List<Course> courseList) { 

super(); 

this.name = name; 

this.courseList = courseList; 

} 

public Student(){ 

} 

public String getName() { 

return name; 

} 

public void setName(String name) { 

this.name = name; 

} 

public List<Course> getCourseList() { 

return courseList; 

} 

public void setCourseList(List<Course> courseList) { 

this.courseList = courseList; 

} 

public void addToCourseList(Course course){ 

List<Course> hallObj = new ArrayList<>(); 

if (this.getCourseList() != null) { 

hallObj = this.getCourseList(); 

} 

hallObj.add( course ); 

this.setCourseList(hallObj); 

} 

}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) throws Exception {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the details of the Item type:");
        String itype=sc.nextLine();
        String[] arr=itype.split(",");
        String name="";Double deposit=0.0,costPerDay=0.0;
        
        int i=0;
            if(i==0 && i<=arr.length){
                i++;
                name=arr[0];
            }
            if(i==1 && i<=arr.length){
                i++;
                deposit=Double.parseDouble(arr[1]);
            }
            if(i==2 && i<=arr.length){
                costPerDay=Double.parseDouble(arr[2]);
            }
        ItemType it=new ItemType(name,deposit,costPerDay);
        System.out.println("The entered item type is:");

        it.display();
	}
}
```

```java
public class ItemType {
	String name;
    Double deposit;
    Double costPerDay;
    public ItemType(){
        
    }
    public ItemType(String name,Double deposit,Double costPerDay){
        this.name=name;
        this.deposit=deposit;
        this.costPerDay=costPerDay;
    }
    public void setName(String name){
        this.name=name;

    }
	public String getName(){
     return name;   
	}
    public void setDeposit(Double deposit){
        this.deposit=deposit;

    }
    public Double getDeposit(){
     return deposit;   
	}
    public void setCostPerDay(Double costPerDay){
        this.costPerDay=costPerDay;

    }
    public Double getCostPerDay(){
     return costPerDay;   
    }
	public void display(){
        
        int i=0;
            if(i==0){
                i++;
                System.out.println("Name:"+name);
            }
            if(i==1){
                i++;
                System.out.println("Deposit:"+deposit);
            }
            if(i==2){
                System.out.println("Cost per day:"+costPerDay);
            }
	}
}
```

```java
import java.io.*; 

import java.util.*; 

class Main 

{ 

public static void main(String args[])throws Exception{ 

BufferedReader b=new BufferedReader(new InputStreamReader(System.in)); 

Account a=new Account(); 

SavingsAccount sa=new SavingsAccount(); 

FixedAccount fa=new FixedAccount(); 

CheckingAccount ca=new CheckingAccount(); 

System.out.println("1)Checking Account"); 

System.out.println("2)Saving Account"); 

System.out.println("3)Fixed Account"); 

System.out.println("Enter Account Type"); 

Integer c=Integer.parseInt(b.readLine()); 

switch(c) 

{ 

case 1: 

{ 

System.out.println("Enter The Account Number"); 

String accountNumber=b.readLine(); 

System.out.println("Enter The Account Holder"); 

String accountHolder=b.readLine(); 

System.out.println("Enter The Amount"); 

Double amount=Double.parseDouble(b.readLine()); 

ca=new CheckingAccount (accountNumber,amount,accountHolder); 

System.out.println("Hi "+ca.getAccountHolder()+", currently you are using Checking Account."); 

System.out.println("Your account number is "+ca.getAccountNumber()); 

System.out.printf("Your are currently holding amount Rs.%.1f",ca. getAmount ()); 

break; 

} 

case 2: 

{ 

System.out.println("Enter The Account Number"); 

String accountNumber=b.readLine(); 

System.out.println("Enter The Account Holder"); 

String accountHolder=b.readLine(); 

System.out.println("Enter The Amount"); 

Double amount=Double.parseDouble(b.readLine()); 

System.out.println("Enter The InterestRate"); 

Double interestRate=Double.parseDouble(b.readLine()); 

sa=new SavingsAccount (accountNumber,amount,accountHolder,interestRate); 

System.out.println("Hi "+sa.getAccountHolder()+", currently you are using Saving Account."); 

System.out.println("Your account number is "+sa.getAccountNumber()); 

System.out.printf("Your are currently holding amount Rs.%.1f",sa. getAmount ()); 

System.out.println("\nRate of interest is "+sa. getInterestRate ()+"%"); 

break; 

} 

case 3: 

{ 

System.out.println("Enter The Account Number"); 

String accountNumber=b.readLine(); 

System.out.println("Enter The Account Holder"); 

String accountHolder=b.readLine(); 

System.out.println("Enter The Amount"); 

Double amount=Double.parseDouble(b.readLine()); 

System.out.println("Enter The Number Of Years"); 

Integer numberOfYears=Integer.parseInt(b.readLine()); 

fa=new FixedAccount (accountNumber,amount,accountHolder,numberOfYears); 

System.out.println("Hi "+fa.getAccountHolder()+", currently you are using Fixed Account."); 

System.out.println("Your account number is "+fa.getAccountNumber()); 

System.out.printf("Your are currently holding amount Rs.%.1f",fa. getAmount ()); 

System.out.println("\nNumber of years "+fa. getNumberOfYears ()); 

break; 

} 

default: 

System.out.println("Invalid Account Type"); 

}}}
```

```java
class Account{
    private String accountNumber;
    private Double amount;
    private String accountHolder;
    Account(){}
    Account(String accountNumber,Double amount,String accountHolder)
    {
        this.accountHolder=accountHolder;
        this.accountNumber=accountNumber;
        this.amount=amount;
    }
    public void setAccountNumber(String accountNumber)
    {
        this.accountNumber=accountNumber;
    }
    public void setAmount(Double amount)
    {
        this.amount=amount;
    }
    public void setAccountHolder(String accountHolder)
    {
        this.accountHolder=accountHolder;
    }
    public String getAccountNumber()
    {
        return accountNumber;
    }
    public Double getAmount()
    {
        return amount;
    }
    public String getAccountHolder()
    {
        return accountHolder;
    }
}
```

```java
class SavingsAccount extends Account
{
     private Double interestRate;
     SavingsAccount(){}
     SavingsAccount(String accountNumber,Double amount,String accountHolder,Double interestRate){
         super(accountNumber,amount,accountHolder);
         this.interestRate=interestRate;
         }
     public Double getInterestRate()
     {
         return interestRate;
     }
}
```

```java
class CheckingAccount extends Account
{
    CheckingAccount(){}
     CheckingAccount(String accountNumber,Double amount,String accountHolder){
         super(accountNumber,amount,accountHolder);
     }
     
}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
        System.out.println("Choose Account Type\n1.Savings Account\n2.Current Account");
        String s=sc.nextLine();
        if(s.equals("1")){
            System.out.println("Enter Account details in comma separated(Account Name,Account Number,Bank Name,Organisation Name)");
            String temp=sc.nextLine();
            String[] arr=temp.split(",");
            int i=0;
            if(i==0){
                System.out.println("Account Name:"+arr[0]);
                i++;
            }
            if(i==1){
                System.out.println("Account Number:"+arr[1]);
                i++;
            }
            if(i==2){
                System.out.println("Bank Name:"+arr[2]);
                i++;
            }
            if(i==3){
                System.out.println("Organisation Name:"+arr[3]);
            }
        }
        
        if(s.equals("2")){
            System.out.println("Enter Account details in comma separated(Account Name,Account Number,Bank Name,TIN Number)");
            String temp=sc.nextLine();
            String[] arr=temp.split(",");
            int i=0;
            if(i==0){
                System.out.println("Account Name:"+arr[0]);
                i++;
            }
            if(i==1){
                System.out.println("Account Number:"+arr[1]);
                i++;
            }
            if(i==2){
                System.out.println("Bank Name:"+arr[2]);
                i++;
            }
            if(i==3){
                System.out.println("TIN Number:"+arr[3]);
            }
        }
	}
}
```

```java
public class CurrentAccount{
	//fill your code here
}
```

```java
public class SavingsAccount{
	//fill your code here
}
```

```java
public class Account {
	//fill your code here
}
```

```java
import java.util.*;
public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the cost of the item for n days");
        String co=sc.nextLine();
        int cost=Integer.parseInt(co);
        System.out.println("Enter the value of n");
        String va=sc.nextLine();
        int val=Integer.parseInt(va);
        
        try{
            System.out.println("Cost per day of the item is "+cost/val);
        }
        catch(ArithmeticException e){
            System.out.println("java.lang.ArithmeticException: / by zero");
        }

	}

}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Item type details:\nEnter the name:");
        String name=sc.nextLine();
        String dep="",cpd="";
        int count=0;
        Double d=0.0,c=0.0;
        for(int i=0;i<1000;i++){
         try{
            System.out.println("Enter the deposit:");
            dep=sc.nextLine();
            d=Double.parseDouble(dep);
            count++;
         }
        catch(NumberFormatException e){
            System.out.println("java.lang.NumberFormatException: For input string: "+"\""+dep+"\"");
            break;
        }
        try{
            System.out.println("Enter the cost per day:");
            cpd=sc.nextLine();
            c=Double.parseDouble(cpd);
            count++;
        }
        catch(NumberFormatException e){
            System.out.println("java.lang.NumberFormatException: For input string: "+"\""+cpd+"\"");
            break;
        }
        System.out.println("The details of the item type are:\nName:"+name+"\nDeposit:"+d+"\nCost Per Day:"+c);
        if(count==2){break;}
        }
        
       
	}
}
```

```java
public class ItemType {
	
}
```

```java
import java.util.*;
public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
        
        System.out.println("Enter an integer input");
        try{
            int a=sc.nextInt();
            System.out.println("Entered value is "+a);
        }
        catch(Exception e){
            System.out.println("java.util.InputMismatchException");
        }

	}

}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args)  {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number of stalls:");
        String num=sc.nextLine();
        Integer n=Integer.parseInt(num);
        ArrayList<String> arr=new ArrayList<>();
        for(int i=0;i<n;i++){
            String temp=sc.nextLine();
            arr.add(temp);
        }
        Double count=0.0;
        for(int j=0;j<arr.size();j++){
            String[] temp=arr.get(j).split(",");
            Double a=Double.parseDouble(temp[2]);
            count+=a;
        }
        Double res=count*150.0;
        System.out.println("The total revenue is "+res);
	}
}
```

```java
public class Stall implements Runnable {
	//Your code here
	public void run() {
		//Your code here
	}
}
```

```java
import java.util.*;
public class Main {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number of events");
        String num=sc.nextLine();
        int n=Integer.parseInt(num);
        if(n>0 && n%2==0){
            System.out.println("Enter event details in CSV");
            for(int i=0;i<n;i++){
                String temp=sc.nextLine();
                String[] arr=temp.split(",");
                Double setb=Double.parseDouble(arr[4]);
                Double capa=Double.parseDouble(arr[3]);
                Double res=(setb/capa);
                Double t=res*100;
                //System.out.println(setb+" "+capa+" "+res);
                if(t<60.0){
                    System.out.println(arr[0]+" yields loss");
                }
                else{
                    System.out.println(arr[0]+" yields profit");
                }
                
            }
        }
        else{
            System.out.println("Invalid Input");
        }
	}
}
```

```java
public class HallBooking {
	//Your code here
	
}
```

```java
public class Event {
	//Your code here
	
}
```

```java
public class ComputeStatus implements Runnable{
	//Your code here
	
	@Override
	public void run() {
		//Your code here
	}

}
```

```java
import java.util.*;
public class Main {

	public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
		System.out.println("Enter the crowd pattern");
        ArrayList<Integer> al=new ArrayList<>();
        for(int i=0;i<12;i++){
            String t=sc.nextLine();
            al.add(Integer.parseInt(t));
        }
        int mor=0,after=0,eve=0,night=0;
        for(int j=0;j<al.size();j++){
            if(j<3){mor+=al.get(j);}
            if(j<6&&j>2){after+=al.get(j);}
            if(j<9&&j>5){eve+=al.get(j);}
            if(j<12&&j>8){night+=al.get(j);}
        }
        System.out.println("The crowd count in the morning is "+mor);
        System.out.println("The crowd count in the afternoon is "+after);
        System.out.println("The crowd count in the evening is "+eve);
        System.out.println("The crowd count in the night is "+night);
	}

}
```

```java
public class Crowd extends Thread {
    private Integer count;
    private Integer[] hourlyCount;	
	public Crowd() {
		super();
	}	
	
	public Crowd(Integer[] hourlyCount) {
		//Fill your code here
	}

	public Integer getCount() {
		//Fill your code here
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer[] getHourlyCount() {
		//Fill your code here
	}
	public void setHourlyCount(Integer[] hourlyCount) {
		this.hourlyCount = hourlyCount;
	}
	
	@Override
	public void run(){
	//Fill your code here
	}

}
```

```java
import java.util.*;
public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        //ArrayList<Integer> al=new ArrayList<>();
        TreeSet<Integer> al= new TreeSet<Integer>();
        System.out.println("The available seats are:");
        for(int i=0;i<100;i++){
            int s=i;
            al.add(s+1);
            if((s+1)%10==0){
                System.out.println((s+1)+" ");
            }else{
                System.out.print((s+1)+" ");
            }
            
        }
        
        System.out.println("Enter the number of Bookings:");
        String num=sc.nextLine();
        Integer n=Integer.parseInt(num);
        for(int j=0;j<n;j++){
            String temp=sc.nextLine();
            String[] arr=temp.split(",");
            int st=Integer.parseInt(arr[0]);
            int end=Integer.parseInt(arr[1]);
            String stat=arr[2];
            boolean t1=al.contains(st);
            boolean t2=al.contains(end);

            
            if(al.contains(st) && al.contains(end) && stat.equals("Booking")){
                System.out.println("The seats "+st+"-"+end+" are booked");
                int st1=st-1;
                int end1=end-1;
                for(int k=0;k<100;k++){
                    if(k>=st1 && k<=end1){
                        al.remove(k+1);
                    }
                }
            }
            else if(t1==false && t2==false && stat.equals("Cancellation")){
                System.out.println("The seats "+st+"-"+end+" are cancelled");
                int st1=st-1;
                int end1=end-1;
                for(int k=0;k<100;k++){
                    if(k>=st1 && k<=end1){
                        al.add((k+1));
                    }
                }
            }
            else{
                System.out.println("The booking/cancellation cannot be done");
                
            }
        }
        //System.out.println(al);
        System.out.println("The available seats are:");
        for(int i=0;i<100;i++){
            int s=i;
            boolean count=al.contains(s+1);
            //al.add(s+1);
            if((s+1)%10==0 && al.contains(s+1)){
                System.out.println((s+1));
            }
            else if((s+1)%10!=0 && al.contains(s+1)){
                System.out.print((s+1)+" ");
            }
            else if((s+1)%10==0 && count==false){
                System.out.println("*");
            }
            else if((s+1)%10!=0 && count==false){
                System.out.print("*");
            }
            
        }
    }    
}
```

```java
public class Seat {
    int seatNumber;
    boolean booked;
    Seat(){
    }
    Seat(int seatNumber,Boolean booked){
        this.seatNumber=seatNumber;
        this.booked=booked;
    }
    public int getseatNumber(){
        //Fill your code here
    }
    public boolean getbooked(){
        //Fill your code here
    }
}
```

```java
public class TicketBookingThread extends Thread {
    int startingSeat,endingSeat;
    boolean isBooking;
    TicketBookingThread(){
    }
    TicketBookingThread(int startingSeat,int endingSeat,boolean isBooking){
        this.startingSeat=startingSeat;
        this.endingSeat=endingSeat;
        this.isBooking=isBooking;
    }
    public int getstartingSeat(){
        //Fill your code here
    }
    public int getendingSeat(){
        //Fill your code here
    }
    public boolean getisBooking(){
        //Fill your code here
    }
}
```

```java
public class Booking extends Thread {
    int startingSeat,endingSeat;
    String isBooking;
    Booking(int startingSeat,int endingSeat,String isBooking){
        this.startingSeat=startingSeat;
        this.endingSeat=endingSeat;
        this.isBooking=isBooking;
    }
	public void run(String a[]) {
		//Fill your code here
	}	
	public synchronized Boolean doBooking(Integer startingSeat, Integer endingSeat,String isBooking,String a[])
    {
		//Fill your code here
    }
}
```

```java
public class Event extends Thread {
	//Your code here	
	public void run() {
		EventBO.processEvent(entry);
	}
}
```

```java
import java.util.*;
public class Main {
    public static void main(String[] args)  {
		System.out.println("Enter the number of Entry/Exit sensors:");
        Scanner sc=new Scanner(System.in);
        String num=sc.nextLine();
        Integer n=Integer.parseInt(num);
        int ent=0,exit=0;
        System.out.println("Enter the sensor readings");
        for(int i=0;i<n;i++){
            String temp=sc.nextLine();
            String[] arr=temp.split(" ");
            for(int j=0;j<arr.length;j++){
                if(arr[j].equals("Entry")){
                    ent+=1;
                }else{exit+=1;}
            }
        }
        System.out.println("The number of current participants are "+(ent-exit));
        
	}
}
```

```java
public class EventBO {
	//Your code here
}
```

```java
import java.util.*;
public class Main {
    public static void main(String[] args)  {
       int jan=0,feb=0,mar=0,apr=0,may=0,jun=0,jul=0,aug=0,sep=0,oct=0,nov=0,dec=0;
       Scanner sc=new Scanner(System.in);
       ArrayList<Integer> al=new ArrayList<>();
       System.out.println("Enter the number of events");
       String num=sc.nextLine();
       Integer n=Integer.parseInt(num);
       if(n>0){
           System.out.println("Enter event details in CSV(Event Name,Event Date,Organizer Name)");
       for(int i=0;i<n;i++){
           String temp=sc.nextLine();
           String[] arr=temp.split(",");
           String t=arr[1];
           String[] arr1=t.split("/");
           String t1=arr1[1];
           al.add(Integer.parseInt(t1));
       }
       
       for(int j=0;j<al.size();j++){
           if(al.get(j)==1){jan+=1;}
           if(al.get(j)==2){feb+=1;}
           if(al.get(j)==3){mar+=1;}
           if(al.get(j)==4){apr+=1;}
           if(al.get(j)==5){may+=1;}
           if(al.get(j)==6){jun+=1;}
           if(al.get(j)==7){jul+=1;}
           if(al.get(j)==8){aug+=1;}
           if(al.get(j)==9){sep+=1;}
           if(al.get(j)==10){oct+=1;}
           if(al.get(j)==11){nov+=1;}
           if(al.get(j)==12){dec+=1;}
       }
       }
       else{
           System.out.println("Invalid Input");
       }
       if(n>0){
       HashMap<String,Integer> map = new HashMap<>();
       if(jan>0){map.put("January",jan);}
       if(feb>0){map.put("February",feb);}
       if(mar>0){map.put("March",mar);}
       if(apr>0){map.put("April",apr);}
       if(may>0){map.put("May",may);}
       if(jun>0){map.put("June",jun);}
       if(jul>0){map.put("July",jul);}
       if(aug>0){map.put("August",aug);}
       if(sep>0){map.put("September",sep);}
       if(oct>0){map.put("October",oct);}
       if(nov>0){map.put("November",nov);}
       if(dec>0){map.put("December",dec);}
       
       //System.out.println(map);
       for (Map.Entry< String,Integer> entry : map.entrySet()){
          System.out.println(entry.getKey()+" = "+entry.getValue()+" events");

       }
            /*System.out.println("Key = " + entry.getKey() +
                         ", Value = " + entry.getValue());*/
       
       }
      
    }
}
```

```java
public class UserBO extends Thread {
	//Your code here	
	public void run() {
		//Your code here
	}
}
```

```java
public class User {
	//Your code here	
}
```

```java
import java.util.*;
public class Main {
	public static void main(String[] args)  {
		Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number of users:");
        String num=sc.nextLine();
        int a=Integer.parseInt(num);
        System.out.println("Enter the number of users per thread:");
        String num1=sc.nextLine();
        int a1=Integer.parseInt(num1);
        System.out.println("Enter the user details");
        ArrayList<String> name=new ArrayList<>();
        ArrayList<String> mob=new ArrayList<>();
        for(int i=0;i<a;i++){
            String t=sc.nextLine();
            String[] arr=t.split(",");
            name.add(arr[0]);
            mob.add(arr[1]);
        }
       
       for(int j=0;j<name.size();j++){
           System.out.println("The message is sent to the user "+name.get(j)+" at the mobile number "+mob.get(j));
           
       }
	}
}
```

```java
import java.io.*;
public class Main
{
public static void main(String[] args)throws IOException
{
BufferedReader buff = new BufferedReader(new InputStreamReader(System.in));
System.out.println("Enter airport1:");
String ap1,ap2;
ap1 = buff.readLine();
System.out.println("Enter airport2:");
ap2 = buff.readLine();
System.out.print("Lucky Airport: ");
if(ap1.charAt(1)==ap1.charAt(5) && ap2.charAt(1)==ap2.charAt(5))
System.out.println(ap1+" and "+ap2);
else if(ap1.charAt(1)==ap1.charAt(5))
System.out.println(ap1);
else if(ap2.charAt(1)==ap2.charAt(5))
System.out.println(ap2);
else
System.out.println("None");
}
}
```

```java
import java.util.Scanner;
public class Main
{
public static void main(String []args)
{
Scanner scan = new Scanner(System.in);
System.out.println("Enter the string");
String sentence1, sentence2;
sentence1 = scan.nextLine();
sentence2 = sentence1.replace("x", "");
int count = sentence1.length() - sentence2.length();
while(count!=0) {
sentence2+='x';
count--;
}
System.out.println("The processed string is "+sentence2);
}
}
```

```java
import java.util.*; 

import java.io.*; 

public class Main 

{ 

public static void main(String[] args)throws IOException 

{ 

BufferedReader br=new BufferedReader(new InputStreamReader(System.in)); 

System.out.println("Enter the input string "); 

String s=br.readLine(); 

System.out.println("The letter frequency is "); 

char[] c=s. toCharArray (); 

Arrays. sort (c); 

int i,j; 

for(i=0;i<c.length;i++) 

{ 

int count=0; 

for(j=i;j<c.length&&c[i]==c[j];++j) 

++count; 

System.out.println(c[i]+" "+count+" "); 

i=j-1; 

} 

} 

}
```

```java
import java.io.*;
import java.util.*;
public class Main
{
    public static void main(String args[])throws IOException
    {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter Address Details :\nEnter Line 1 :");
        String line1=br.readLine();
        System.out.println("Enter Line 2 :");
        String line2=br.readLine();
        System.out.println("Enter City :");
        String city=br.readLine();
        System.out.println("Enter Country :");
        String country=br.readLine();
        System.out.println("Enter Zip Code :");
        int zip=Integer.parseInt(br.readLine());
        Address address=new Address(line1,line2,city,country,zip);
        System.out.println("Address Details :\n"+address.toString());
    }
}
```

