/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	ImageHero = "ImageHero",
	ImagesSlider = "ImagesSlider",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ImageHeroRecord = {
	Image?: string
	Name?: string
}

export type ImagesSliderRecord = {
	Image?: string
	Name?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ImageHeroResponse<Texpand = unknown> = Required<ImageHeroRecord> & BaseSystemFields<Texpand>
export type ImagesSliderResponse<Texpand = unknown> = Required<ImagesSliderRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	ImageHero: ImageHeroRecord
	ImagesSlider: ImagesSliderRecord
	users: UsersRecord
}

export type CollectionResponses = {
	ImageHero: ImageHeroResponse
	ImagesSlider: ImagesSliderResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'ImageHero'): RecordService<ImageHeroResponse>
	collection(idOrName: 'ImagesSlider'): RecordService<ImagesSliderResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
