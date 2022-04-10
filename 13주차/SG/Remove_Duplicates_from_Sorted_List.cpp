//   Definition for singly-linked list.
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    set<short> s;
    ListNode *deleteDuplicates(ListNode *head)
    {
        ListNode *tmp = head;
        ListNode *pre = NULL;
        while(1)
        {
            if(head == NULL) break;
            if(s.count(head->val)){
                pre->next = head->next;
                head = head->next;
                continue;
            }
            s.insert(head->val);
            pre = head;
            head = head->next;
        }
        return tmp;
    }
};