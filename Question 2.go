package main

import (
	"fmt"
)

func print_number(sayi int) {
	if sayi < 2 {
		return
	}

	print_number(sayi / 2)

	fmt.Println(sayi)
}

func main() {
	var numara int
	fmt.Print("Bir Sayi Gir: ")
	fmt.Scan(&numara)

	print_number(numara)
}
