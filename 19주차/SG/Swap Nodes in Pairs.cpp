#include<iostream>
using namespace std;

// Definition for singly-linked list.
struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
 };
 
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        int temp;
        ListNode *ptr = head;
        
        while(head != NULL){
            
            if(head->next != NULL){
                temp = (head->next)->val;
                (head->next)->val = head->val;
                head->val = temp;   
            }
            else
                break;
            
            head = head->next->next;
        }
        
        return ptr;
    }
};