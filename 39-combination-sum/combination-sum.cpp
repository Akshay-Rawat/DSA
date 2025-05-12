class Solution {
public:
    set<vector<int>> s; // optional, can be avoided if input is sorted and duplicates handled

    void getAllCombinations(vector<int>& arr, int idx, int tar, vector<vector<int>> &ans,
                            vector<int> &combin) {

        if (tar == 0) {
            if (s.find(combin) == s.end()) {
                ans.push_back(combin);
                s.insert(combin);
            }
            return;
        }

        if (idx == arr.size() || tar < 0) {
            return;
        }

        // Include current element (allowing multiple times)
        combin.push_back(arr[idx]);
        getAllCombinations(arr, idx, tar - arr[idx], ans, combin);
        combin.pop_back();

        // Exclude current element
        getAllCombinations(arr, idx + 1, tar, ans, combin);
    }

    vector<vector<int>> combinationSum(vector<int>& arr, int target) {
        vector<vector<int>> ans;
        vector<int> combin;
        sort(arr.begin(), arr.end()); // optional but useful to handle duplicates
        getAllCombinations(arr, 0, target, ans, combin);
        return ans;
    }
};
