class Solution:
    def twoSum(self, my_lst, target):
        temp = 0
        for i in range(len(my_lst)):
            temp = i
            print(temp)
            # print(my_lst[i])

            for j in range(i+1, len(my_lst)):

                if my_lst[temp] + my_lst[j] == target:
                    # print (my_lst[i],  my_lst[j])
                    return [i, j]
        return False

        # Online Python compiler (interpreter) to run Python online.


target = 10
my_lst = [2, 5, 5, 11]
# my_lst = [2,7,11,15]
# print(Solution(my_lst, target))


obj = Solution()
print(obj.twoSum(my_lst, target))
