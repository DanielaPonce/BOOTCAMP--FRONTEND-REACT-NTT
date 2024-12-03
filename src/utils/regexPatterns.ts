export const RegexPatterns: Record<RegexPatternsNames, RegExp> = {
	OnlyLetters: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
	PhoneNumber: /^\d{9}$/,
	Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

enum RegexPatternsNames {
	OnlyLetters = 'OnlyLetters',
	PhoneNumber = 'PhoneNumber',
	Email = 'Email'
}
