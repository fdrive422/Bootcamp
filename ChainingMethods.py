class User:

    bank_name = "First National Dojo"
    def __init__(self, name, emailAddress):
        self.name = name
        # self.email = emailAddress
        self.accountBalance = 0

    def makeDepoit(self, amount):
        self.accountBalance += amount
        return self

    def makeWithdrawal(self, amount):
        self.accountBalance -= amount
        return self

    def displayUserBalance(self):
        print(f"{self.name}, Balance: ${self.accountBalance}")
        return self

    def updateEmailAddress(self, newEmailAddress):
        self.email = newEmailAddress

    def transferMoney(self,amount,user):
        self.accountBalance -= amount
        user.accountBalance += amount
        self.displayUserBalance()
        user.displayUserBalance()

tom = User("Tom Cruise", "tom@cruise.com")
pete = User("Pete Mitchell", "pete@maverick.com")
ethan = User("Eathan Hunt", "ethan@imf.com")

tom.makeDepoit(50000).makeDepoit(100000).makeDepoit(150000).makeWithdrawal(25000).displayUserBalance()
pete.makeDepoit(150000).makeDepoit(200000).makeWithdrawal(50000).makeWithdrawal(150000).displayUserBalance()
ethan.makeDepoit(300000).makeWithdrawal(100000).makeWithdrawal(100000).makeWithdrawal(50000).displayUserBalance()
tom.transferMoney(75000, ethan)
