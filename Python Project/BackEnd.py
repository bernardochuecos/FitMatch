def Calc(Person[]):
        file = open("NumOfPeople.txt", "r")
        Num = file.readline()
        #Name //
        #Age //
        #Exp level (Beginner, Intermediate, Expert) //
        #Pace?
        #Gender Pref //
        #Event //
        #lvl of Convo( Quiet, Casual, Talkative //
        result = [[0 for x in range(Num)] for y in range(4)]
        #return a list of people with their name, age, gender, and percent match
        for num in range(0, Num):
                file2 = open("file{}.txt".format(num), 'r')
                persA = []
                for x in range(7):
                        persA.append(file2.readline())
                result[num][0] = persA[0] #Name
                result[num][1] = persA[1] #Age
                result[num][2] = persA[4] #Gender
                #calculation part for result[num][3]
                percent = 0
                #Gender Pref
                if(Person[4] != "Either"):
                    if(Person[4] != persA[4]):
                        result[num][3] = 0
                        continue
                #Event Pref
                if(Person[5] != persA[5]):
                    result[num][3] = 0
                    continue
                #Experience level
                if(Person[2] == persA[2]):
                    percent += 25
                elif(Person[2] == "Beginner"):
                    if(persA[2] == "Expert"):
                        percent += 5
                    else:
                        percent += 15
                elif(Person[2] == "Intermediate"):
                    if(persA[2] == "Expert"):
                        percent += 15
                    else:
                        percent += 15
                elif(Person[2] == "Expert"):
                    if(persA[2] == "Beginner"):
                        percent += 5
                    else:
                        percent += 15
                #Convo
                if(Person[6] == persA[6]):
                    percent += 25
                elif(Person[6] == "Quiet"):
                    if(persA[6] == "Casual"):
                        percent += 10
                    else:
                        percent += 3
                elif(Person[6] == "Casual"):
                    if(persA[6] == "Quiet"):
                        percent += 12
                    else:
                        percent += 9
                elif(Person[6] == "Talkative"):
                    if(Person[6] == "Casual"):
                        percent += 9
                    else:
                        percent += 3
                #Age
                if(Person[1] == persA[1]):
                    percent += 25
                else:
                    deltAge = abs(int(Person[1]) - int(persA[1]))
                    if(deltAge > 10):
                        percent += 2
                    elif(deltAge > 5 && deltAge <= 10):
                        percent += 13
                    else:
                        percent += 22
                #Pace
                if(Person[3] == persA[3]):
                    percent += 25
                else:
                    pace1 = Person[3].split(":")
                    pace2 = persA[3].split(":")
                    deltMin = abs(int(pace1[0]) - int(pace2[0]))
                    if(deltMin <= 2):
                        percent += 23
                    elif(deltMin > 2 && deltMin < 4):
                        percent += 8
                    else:
                        percent += 2
                result[num][3] = percent
                file2.close()
        file.close()
        return result
