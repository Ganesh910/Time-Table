"""Input: Section, Subjects
    Output: A set of Time Tables that can be arranged without any clashing of subjects among the different sections."""

class timeTable:
    def __init__(self, ava, sec, sub):
        self.sec = sec #Number of concurrent sections
        self.sub = sub #Number of Subjects to be Taught
        self.t = [[None for i in range(sub)] for j in range(sec)]
        self.ava = ava
        self.coll = []

    def assign(self, row=0, column=0):
        # print(row, column)

        #What are the possible choices that I have for this index?
        options = self.avail(row, column)
        
        if len(options)==0:
            return

        if len(options)==1 and self.check(row, column, options[0])==False:
            return False

        #Check all the possible placements of the subjects in array
        for option in options:

            #Can I place (Option) at this index? True: If there is no clashing vertically, else False
            if self.check(row, column, option):

                #Place the value on the index
                self.t[row][column]=option

                #What are the co-ordinates of the next cell?
                nextRow, nextCol = self.cord(row, column)

                #If it was the last cell of the table then just Stop
                if nextRow==-1 and nextCol==-1:
                    # print("Last cell")
                    print(self.t)
                    self.coll.append(self.t)
                    return True
                
                #And check if there is any problem further recursively
                bool = self.assign(nextRow, nextCol)

                #If False: means there is some deadend further below
                if bool == False:

                    #So I should remove the placement that I've just made and proceed further
                    self.t[row][column] = None

    def check(self, r, column, option):
        
        for row in range(r):
            if self.t[row][column]==option:
                return False
        return True

    #return the Co-ordinates of the next cell
    def cord(self, row, col):
        if col+1>=self.sub and row+1>=self.sec:
            return (-1, -1)
        if col+1<self.sub:
            return (row, col+1)
        return (row+1, 0)

    #Returns the list of the available options that can be placed at a given cell.
    def avail(self, row, column):
        li = self.ava[:]
        for i in range(column):
            li.remove(self.t[row][i])
        return li

sub = input("Enter the names of subjects seprated by ', ' : ").split(", ")
sec = int(input("How many sections are there?\n"))
tt = timeTable(sub, sec, len(sub))
tt.assign()
print("-------------------------------------")
print(len(tt.coll))
