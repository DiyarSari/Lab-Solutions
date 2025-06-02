package main

import (
	"fmt"
)

func most_repeated_word(array []string) string {
	mostRepeated := array[0]
	maxCount := 0

	for i := 0; i < len(array); i++ {
		count := 0
		for j := 0; j < len(array); j++ {
			if array[i] == array[j] {
				count++
			}
		}
		if count > maxCount {
			maxCount = count
			mostRepeated = array[i]
		}
	}
	return mostRepeated
}

func main() {
	data := []string{"apple", "pie", "apple", "red", "red", "red"}

	fmt.Println("Most Repeated Word:", most_repeated_word(data))
}
