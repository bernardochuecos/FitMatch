def WeightCalculation():
        print("please feed me")
        
def NewUser(name):
        file = open("database.txt", "a+")
        file.write("%s " %name)
        Gend_Pref = input("Partner Preference? (Male, Female, Either) ")
        Gend_Pref = Gend_Pref.capitalize()
        while(Gend_Pref != "Male" and Gend_Pref != "Female" and Gend_Pref != "Either"):
                Gend_Pref = input("Please type in Male, Female or Either for a partner ")
                Gend_Pref = Gend_Pref.capitalize()
        file.write("%s " %Gend_Pref)
        Event = input("Are you running an event? ")
        Event = Event.capitalize()
        while(Event != "Yes" and Event != "No"):
                Event = input("Please put yes or no")
                Event = Event.capitalize()
        if(Event == "Yes"):
                Event_Choice = input("Which event?(Please pick from this list: Longhorn Run, Capital 10K, Convergent Run ")
                while(Event_Choice != "Longhorn Run" and Event_Choice != "Convergent Run" and Event_Choice != "Capital 10k"):
                        Event_Choice = input("Invalid Event. Please pick either: Longhorn Run, Capital 10k, or Convergent Run ")
                Event_Choice = Event_Choice.replace(" ", "")
                file.write("%s " %Event_Choice)
        else:
                file.write("None ")
        Pace = input("What is your pace?(Enter a number) ")
        while(not Pace.isdigit()):
                Pace = input("Invalid input. Please enter a number! ")
        file.write("%s " %Pace)
        Talkative = input("What is your preferred level of conversation? (Quiet, Casual, Talkative) ")
        Talkative = Talkative.capitalize()
        while(Talkative != "Quiet" and Talkative != "Casual" and Talkative != "Talkative"):
                Talkative = input("Please input Quiet, Casual, or Talkative! ")
                Talkative = Talkative.capitalize()
        file.write("%s\n" %Talkative)
        file.close()

def Search(name):
        file = open("Database.txt", "r")
        for line in file:
                temp = line.split()
                if(temp[0] == name):
                        file.close()
                        return temp
        print("No one found!")
        file.close()
        
def Match(name):
        Person = Search(name)
        file = open("Database.txt", "r")
        for line in file:
                line = line.strip()
                Matchee = line.split()
                if(Matchee[0] == Person[0]):
                        continue
                if(Person[1] != "Either"):
                        if(Person[1] != Matchee[1]):
                                continue
                if(Person[2] != "None" and Matchee[2] != "None"):
                        if(Matchee[2] == Person[2] and Matchee[3] == Person[3] and Matchee[4] == Person[4]):
                                print ("It's a match! It's", Matchee[0])
                                file.close()
                                return
        print("Sorry no match!")
        file.close()

def main():
        print("Hello! Welcome to FitMatch!")
        print()
        new = input("Are you a new user? ")
        new = new.lower()
        if(new == "yes"):
                name = input("What is your first name? ")
                name = name.capitalize()
                NewUser(name)
        else:
                match = input("Would you like to be matched? ")
                match = match.lower()
                if(match == "no"):
                        print("Ok! Goodbye!")
                else:
                        exist_name = input("What is your name? ")
                        exist_name  = exist_name.capitalize()
                        Match(exist_name)
main()
		
	
