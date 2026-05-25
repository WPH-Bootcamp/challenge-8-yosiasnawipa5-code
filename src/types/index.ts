export interface NavItem { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface ProcessStep { id: number; title: string; sub: string; }
export interface Service { id: number; icon: string; title: string; desc: string; }
export interface Industry { id: string; label: string; description: string; image: string; }
export interface Portfolio { id: number; type: string; title: string; image: string; }
export interface Testimonial { id: number; quote: string; name: string; role: string; avatar: string; rating: number; }
export interface FAQ { q: string; a: string; }
