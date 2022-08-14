public static List<String> implementAPI(List<String> logs) {

    int n = logs.size();
    ArrayList<String> ans = new ArrayList<>();
    HashMap<String, String> register = new HashMap<>();
    HashMap<String, String> login = new HashMap<>();

    for (int i = 0; i < n; i++) {
        String temp = logs.get(i);
        String[] split = temp.split("\\s+");
        if (split[0].equals("register")) {
            if (register.containsKey(split[1]))
                // sauravhathi
                ans.add("Username already exists");
            else {
                ans.add("Registered Successfully");
                register.put(split[1], split[2]);
            }
        } else if (split[0].equals("login")) {
            if (register.containsKey(split[1])) {
                if ((login.containsKey(split[1]))) {
                    ans.add("Login Unsuccessful");
                } else {
                    if (register.get(split[1]).equals(split[2])) {
                        ans.add("Logged In Successfully");
                        login.put(split[1], split[2]);
                    } else {
                        ans.add("Login Unsuccessful");
                    }
                }
            } else {
                ans.add("Login Unsuccessful");
            }

        } else {
            if (register.containsKey(split[1])) {
                if ((login.containsKey(split[1]))) {
                    ans.add("Logged Out Successfully");
                    login.remove(split[1]);
                } else {
                    //sauravhathi
                    ans.add("Logout Unsuccessful");
                }
            } else {
                ans.add("Logout Unsuccessful");
            }
        }
    }

    return ans;
}
