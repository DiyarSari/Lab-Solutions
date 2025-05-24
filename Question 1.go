package main

import (
	"fmt"
)

func a_counter(kelime string) int {
	sayac := 0
	for _, harf := range kelime {
		if harf == 'a' {
			sayac++
		}
	}
	return sayac
}

func main() {
	kelimeler := []string{"aaaasd", "a", "aab", "aaabcd", "ef", "cssssssd", "fdz", "kf", "zc", "lklklklklklklklkl", "l"}
	adet := len(kelimeler)

	for i := 0; i < adet; i++ {
		for j := i + 1; j < adet; j++ {
			a1 := a_counter(kelimeler[i])
			a2 := a_counter(kelimeler[j])

			if a1 < a2 || (a1 == a2 && len(kelimeler[i]) < len(kelimeler[j])) {
				kelimeler[i], kelimeler[j] = kelimeler[j], kelimeler[i]
			}
		}
	}

	fmt.Print("[")
	for i, kelime := range kelimeler {
		fmt.Printf("\"%s\"", kelime)
		if i < adet-1 {
			fmt.Print(", ")
		}
	}
	fmt.Println("]")
}
