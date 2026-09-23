export type UsersRow = {
  id: string
  email: string
  emailVerified: number | string | null
  displayName: string | null
  avatarUrl: string | null
  phone: string | null
  phoneVerified: number | string | null
  role: string | null
  metadata: string | null
  createdAt: string
  updatedAt: string
  lastSignIn: string
}

export type ViewingEnquiriesRow = {
  id: string
  name: string
  email: string
  city: string
  preferredDate: string
  message: string | null
  createdAt: string
}
