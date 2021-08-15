import { Currency } from "src/interfaces/types/Currency"
import { WalletType } from "src/interfaces/types/WalletType"

export type CreateWalletDto = {
	name: string
	order: number
	owner_user_id: string
	initial_balance: number
	default_currency: Currency
	type: WalletType
	icon_file_id: string | null
}

export type CreateIncomeDto = {
	wallet_id: string
	amount: number
	currency: Currency
	timestamp: Date
	location: string
	related_expense_ids: string[]
	note: string
	category_id: string
	tags: string[]
	group_id: string | null
	attachment_file_ids: string[]
}

export type CreateTransferDto = {
	source_wallet_id: string
	source_amount: number
	source_currency: Currency
	target_wallet_id: string
	target_amount: number
	target_currency: Currency
	timestamp: Date
	note: string
}
