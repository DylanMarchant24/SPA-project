import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
    it('debería renderizar el título SPA relax', () => {
        render(<App />);
        // Verifica si existe el elemento con el texto SPA relax (el título principal h1)
        expect(screen.getByText(/SPA relax/i)).toBeDefined();
    });
});
