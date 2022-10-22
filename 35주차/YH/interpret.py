class Solution:
    def interpret(self, command: str) -> str:

        for key, val in {"()":"o", "(al)":"al" }.items():
            command = command.replace(key, val)
        return command