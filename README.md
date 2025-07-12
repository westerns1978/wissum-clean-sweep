# Jenny's Wissum Sweep 🐾

A comprehensive cleaning service web application featuring Sissy Girl, our beloved 6-year-old Siberian Husky mascot. Built for professional Airbnb and residential cleaning services in Navarre, FL.

![Sissy Girl - Our Mascot](public/20250302_131356-EFFECTS.jpg)

## 🌟 Features

### Public Website
- **Hero Section**: Beautiful landing page featuring Sissy Girl on Navarre Beach
- **Service Booking**: Interactive form for clients to request cleaning services
- **About Section**: Jenny's 10+ years experience and Sissy's story
- **Reviews System**: Public display of 5-star client testimonials
- **Responsive Design**: Optimized for desktop and mobile devices

### Desktop Dashboard (`/dashboard`)
- **Job Management**: View, accept, and decline cleaning jobs from Breezeway
- **Earnings Tracking**: Real-time earnings with 70% profit sharing visualization
- **Review Management**: Moderate and approve client reviews
- **Team Chat**: Integrated Slack communication window
- **Analytics**: Performance metrics and job completion rates

### Mobile App (`/mobile`)
- **Cleaner View**: Mobile-optimized job cards with photo upload functionality
- **Client View**: Service booking and payment processing
- **Photo Upload**: Before/after photos with Cloudinary integration
- **Payment Options**: Venmo, CashApp, and Stripe payment methods
- **"Wissum Woof" Notifications**: Playful notification system

### Review System (`/reviews`)
- **Client Reviews**: 5-star rating system with photo uploads
- **Review Moderation**: Admin approval system for quality control
- **Search & Filter**: Advanced review management tools
- **Public Gallery**: Showcase of approved testimonials

## 🎨 Design System

### Color Palette
- **Emerald Green**: `#2E8B57` - Primary brand color
- **Sunflower Yellow**: `#FFC107` - Accent color for CTAs
- **Soft Blue**: `#87CEEB` - Gulf Coast inspired secondary
- **Navarre Sand**: `#F5F5DC` - Background and neutral tones

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Fallback**: Inter, system fonts

### Animations
- **Wave Animation**: Subtle floating effect for buttons
- **Paw Bounce**: Playful animation for Sissy's paw print logo
- **Hover States**: Smooth transitions throughout the interface

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

### Backend & Services
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Clerk (email/Google OAuth)
- **File Storage**: Cloudinary (photo uploads)
- **Payments**: Stripe API
- **Communication**: Slack API integration
- **Job Management**: Breezeway API

### Deployment
- **Hosting**: Vercel
- **Domain**: Custom domain support
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

## 📱 Responsive Design

### Desktop (1920x1080)
- Full-featured dashboard with multi-column layouts
- Advanced data visualization and charts
- Comprehensive admin controls

### Mobile (360x800)
- Touch-optimized interface
- Simplified navigation
- Photo upload with camera integration
- Swipe gestures for job management

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Environment Variables
Create a `.env.local` file with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Breezeway API
BREEZEWAY_API_KEY=your_breezeway_api_key
BREEZEWAY_BASE_URL=https://api.breezeway.io

# Slack API
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_SIGNING_SECRET=your_slack_signing_secret
```

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jennys-wissum-sweep.git
   cd jennys-wissum-sweep
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Deployment

1. **Deploy to Vercel**
   ```bash
   # Connect your GitHub repository to Vercel
   # Set environment variables in Vercel dashboard
   # Deploy automatically on git push
   ```

2. **Set up custom domain** (optional)
   - Configure DNS settings
   - Add domain in Vercel dashboard
   - SSL certificate automatically provisioned

## 🔌 API Integrations

### Breezeway Integration
- **Purpose**: Job scheduling and property management
- **Endpoints**: 
  - `GET /api/jobs` - Fetch available cleaning jobs
  - `POST /api/jobs/{id}/accept` - Accept a job
  - `PUT /api/jobs/{id}/complete` - Mark job as complete
- **Webhooks**: Real-time job updates

### Slack Integration
- **Purpose**: Team communication
- **Features**:
  - Real-time messaging
  - Job notifications
  - Photo sharing
  - Team coordination

### Stripe Integration
- **Purpose**: Payment processing
- **Features**:
  - Credit card payments
  - Subscription management
  - Payout tracking
  - Invoice generation

### Cloudinary Integration
- **Purpose**: Photo storage and optimization
- **Features**:
  - Before/after photo uploads
  - Automatic image optimization
  - CDN delivery
  - Transformation API

## 📊 Database Schema

### Supabase Tables

#### `jobs`
```sql
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  address TEXT NOT NULL,
  scheduled_time TIMESTAMPTZ NOT NULL,
  pay_amount INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  job_type TEXT NOT NULL,
  notes TEXT,
  cleaner_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `reviews`
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  photos TEXT[], -- Array of Cloudinary URLs
  job_type TEXT,
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `earnings`
```sql
CREATE TABLE earnings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cleaner_id UUID REFERENCES auth.users(id),
  job_id UUID REFERENCES jobs(id),
  gross_amount INTEGER NOT NULL,
  cleaner_share INTEGER NOT NULL, -- 70% of gross
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🎯 User Roles & Permissions

### Admin (Jenny)
- Full access to all features
- Job management and assignment
- Review moderation
- Earnings and analytics
- Team management

### Cleaner
- View assigned jobs
- Accept/decline jobs
- Upload completion photos
- Track earnings
- Team chat access

### Client
- Book cleaning services
- View job status
- Make payments
- Leave reviews
- Upload photos

## 🔒 Security Features

- **Authentication**: Secure login with Clerk
- **Authorization**: Role-based access control
- **Data Protection**: Encrypted sensitive data
- **API Security**: Rate limiting and validation
- **File Upload**: Secure image processing
- **Payment Security**: PCI-compliant Stripe integration

## 📈 Analytics & Monitoring

### Key Metrics
- Job completion rates
- Client satisfaction scores
- Revenue tracking
- Cleaner performance
- Response times

### Monitoring Tools
- Vercel Analytics
- Supabase Dashboard
- Stripe Dashboard
- Error tracking and logging

## 🎨 Branding Guidelines

### Logo Usage
- Primary logo: Sissy's paw print in emerald green
- Always maintain clear space around logo
- Use on light backgrounds for best contrast

### Voice & Tone
- Friendly and professional
- Gulf Coast warmth
- Family-oriented
- Trustworthy and reliable

### Photography
- High-quality before/after shots
- Bright, clean aesthetic
- Include Sissy Girl when appropriate
- Navarre Beach and Gulf Coast themes

## 🚧 Roadmap

### Phase 1 (Current)
- ✅ Core website functionality
- ✅ Basic job management
- ✅ Review system
- ✅ Mobile optimization

### Phase 2 (Q2 2025)
- 🔄 Advanced analytics dashboard
- 🔄 Automated scheduling
- 🔄 Push notifications
- 🔄 Sissy's Memory Wall

### Phase 3 (Q3 2025)
- 📋 AI-powered job matching
- 📋 Advanced reporting
- 📋 Multi-location support
- 📋 Franchise system

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines and code of conduct.

### Development Guidelines
- Follow existing code style
- Write meaningful commit messages
- Test thoroughly before submitting
- Update documentation as needed

## 📞 Support

For technical support or questions:
- **Email**: support@wissumSweep.com
- **Phone**: (850) 555-WOOF
- **GitHub Issues**: Create an issue for bugs or feature requests

## 📄 License

This project is proprietary software owned by Jenny's Wissum Sweep. All rights reserved.

## 🙏 Acknowledgments

- **Sissy Girl**: Our beloved mascot and inspiration
- **Navarre Community**: For supporting local business
- **Open Source Community**: For the amazing tools and libraries
- **Gulf Coast**: For the beautiful inspiration

---

Made with ❤️ in Navarre, FL by Jenny's Wissum Sweep Team

*Sissy Girl approves this README! 🐾*