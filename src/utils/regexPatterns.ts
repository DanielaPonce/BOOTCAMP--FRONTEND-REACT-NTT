export const RegexPatterns: Record<RegexPatternsNames, RegExp> = {
	OnlyLetters: /^[a-zA-Z]+$/,
	PhoneNumber: /^\d{9}$/
};

enum RegexPatternsNames {
	OnlyLetters = 'OnlyLetters',
	PhoneNumber = 'PhoneNumber'
}
