# BuyCars.com API Documentation

## Base URL
```
https://sell-buycars-1.onrender.com
```

## Authentication
Most endpoints that modify data require a JWT token. Include it in the request header as:
```
Authorization: Bearer <your_token>
```

## API Endpoints

### User Authentication

#### 1. Sign Up
- **URL:** `/user/signup`
- **Method:** `POST`
- **Authentication Required:** No
- **Request Body:**
```json
{
    "name": "string",
    "email": "string",
    "password": "string",
    "mobile": "number"
}
```
- **Success Response (201):**
```json
{
    "msg": "Please check your email for verification code",
    "email": "user@example.com"
}
```
- **Error Responses:**
  - `400`: Email/Mobile already exists
  - `500`: Server error

#### 2. Verify OTP
- **URL:** `/user/verify-otp`
- **Method:** `POST`
- **Authentication Required:** No
- **Request Body:**
```json
{
    "email": "string",
    "otp": "string"
}
```
- **Success Response (200):**
```json
{
    "msg": "Email verified successfully"
}
```
- **Error Responses:**
  - `400`: Invalid/Expired OTP
  - `404`: User not found

#### 3. Resend OTP
- **URL:** `/user/resend-otp`
- **Method:** `POST`
- **Authentication Required:** No
- **Request Body:**
```json
{
    "email": "string"
}
```
- **Success Response (200):**
```json
{
    "msg": "New OTP sent successfully"
}
```
- **Error Responses:**
  - `400`: Email already verified
  - `404`: User not found

#### 4. Login
- **URL:** `/user/login`
- **Method:** `POST`
- **Authentication Required:** No
- **Request Body:**
```json
{
    "email": "string",
    "password": "string"
}
```
- **Success Response (200):**
```json
{
    "msg": "Login successful",
    "user": {
        "_id": "string",
        "name": "string",
        "email": "string"
    },
    "token": "string"
}
```
- **Error Responses:**
  - `401`: Incorrect password
  - `403`: Email not verified
  - `404`: Email not found

### Car Management

#### 1. Add New Car
- **URL:** `/sellcar/addcar`
- **Method:** `POST`
- **Authentication Required:** Yes
- **Request Body:**
```json
{
    "images": ["string"],
    "Original_Paint": "string",
    "tags": ["string"],
    "Number_of_previous_buyers": "number",
    "Registration_Place": "string",
    "KMs_on_Odometer": "number",
    "Major_Scratches": "number",
    "price": "number",
    "car_Manufacturer": "string",
    "model": "string",
    "year": "number"
}
```
- **Success Response (200):**
```json
{
    "post": {/* car details */},
    "msg": "Car Added Successfully...!"
}
```
- **Error Response:**
  - `422`: Missing required fields

#### 2. Get User's Car Posts
- **URL:** `/sellcar/getpost/:id`
- **Method:** `GET`
- **Authentication Required:** No
- **URL Parameters:** id (user ID)
- **Success Response (200):**
```json
{
    "user": {/* user details */},
    "post": [/* array of car posts */]
}
```
- **Error Response:**
  - `422`: User not found

#### 3. Update Car Details
- **URL:** `/sellcar/updatedata/:id`
- **Method:** `PATCH`
- **Authentication Required:** Yes
- **URL Parameters:** id (car ID)
- **Request Body:** Any car fields that need updating
- **Success Response (200):**
```json
{
    "message": "Product Details Updated!",
    "oldProductDetais": {/* previous car details */}
}
```

#### 4. Delete Car Post
- **URL:** `/sellcar/deletepost/:postId`
- **Method:** `DELETE`
- **Authentication Required:** Yes
- **URL Parameters:** postId (car post ID)
- **Success Response (200):**
```json
{
    "msg": "Successfully DELETED"
}
```
- **Error Response:**
  - `422`: Not authorized or post not found

#### 5. Get All Cars
- **URL:** `/sellcar/getdata`
- **Method:** `GET`
- **Authentication Required:** No
- **Success Response (200):** Array of all car listings

#### 6. Search Cars
- **URL:** `/sellcar/searchcars`
- **Method:** `GET`
- **Authentication Required:** No
- **Query Parameters:** query (search term)
- **Success Response (200):**
```json
{
    "post": [/* matching car posts */]
}
```
- **Error Responses:**
  - `404`: No posts found matching criteria
  - `500`: Search error

#### 7. Get Car by ID
- **URL:** `/sellcar/getdatabyid/:postId`
- **Method:** `GET`
- **Authentication Required:** No
- **URL Parameters:** postId (car post ID)
- **Success Response (201):**
```json
{
    "data": {/* car details */}
}
```

## Error Handling
All endpoints may return these general errors:
- `500`: Server error with error message
- `404`: Route not found

## Sample Usage with cURL

### Login
```bash
curl -X POST https://sell-buycars-1.onrender.com/user/login \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","password":"yourpassword"}'
```

### Add New Car
```bash
curl -X POST https://sell-buycars-1.onrender.com/sellcar/addcar \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN" \
-d '{
    "images": ["image_url"],
    "Original_Paint": "Red",
    "tags": ["SUV", "Automatic"],
    "Number_of_previous_buyers": 1,
    "Registration_Place": "Delhi",
    "KMs_on_Odometer": 50000,
    "Major_Scratches": 0,
    "price": 500000,
    "car_Manufacturer": "Honda",
    "model": "City",
    "year": 2020
}'
```# CarApp
