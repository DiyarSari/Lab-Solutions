package main

import (
	"fmt"
)

func a_counter(word string) int {
	count := 0
	for _, char := range word {
		if char == 'a' {
			count++
		}
	}
	return count
}

func main() {
	words := []string{"aaaasd", "a", "aab", "aaabcd", "ef", "cssssssd", "fdz", "kf", "zc", "lklklklklklklklkl", "l"}
	length := len(words)

	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			a1 := a_counter(words[i])
			a2 := a_counter(words[j])

			if a1 < a2 || (a1 == a2 && len(words[i]) < len(words[j])) {
				words[i], words[j] = words[j], words[i]
			}
		}
	}

	fmt.Print("[")
	for i, word := range words {
		fmt.Printf("\"%s\"", word)
		if i < length-1 {
			fmt.Print(", ")
		}
	}
	fmt.Println("]")
}
