package main

import (
	"fmt"
)

func most_repeated_word(dizi []string) string {
	enCokTekrarEden := dizi[0]
	maksSayac := 0

	for i := 0; i < len(dizi); i++ {
		sayac := 0
		for j := 0; j < len(dizi); j++ {
			if dizi[i] == dizi[j] {
				sayac++
			}
		}
		if sayac > maksSayac {
			maksSayac = sayac
			enCokTekrarEden = dizi[i]
		}
	}
	return enCokTekrarEden
}

func main() {
	veri := []string{"apple", "pie", "apple", "red", "red", "red"}

	fmt.Println("En Çok Tekrar Eden:", most_repeated_word(veri))
}
