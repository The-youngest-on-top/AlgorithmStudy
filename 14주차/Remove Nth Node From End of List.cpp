// Definition for singly-linked list.
#include<bits/stdc++.h>
using namespace std;
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        vector<ListNode *> V;
        ListNode * cur = head;
        int idx =0;
        while(cur!=NULL){
            idx++;
            V.push_back(cur);
            cur = cur->next;
        }
        ListNode *del = V[idx-n+1];
        if(idx == 1){
            ListNode *tmp;
            return tmp;
        }
        if(idx-n+1 == 0) head = del->next;
        if(idx-n+1 == idx) V[idx-n]->next = NULL;
        else{
            V[idx-n-1]->next = V[idx-n+1];
        }
        return head;
    }   
};