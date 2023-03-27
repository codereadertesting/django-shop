#include <stdlib.h>

int main() {
    while (1) {
        int* ptr = (int*) malloc(sizeof(int));
        runProgram(ptr);
    }
    return 0;
}
