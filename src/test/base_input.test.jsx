import { describe, it, expect } from 'vitest';
import { handleValidationRule } from '../components/BaseForm.jsx'

describe('test form functionality', () => {
  it('should validate correctly', () => {
    const payload = {rule: undefined, value: ''}
    expect(handleValidationRule(payload)).toBe('')
    payload.rule = 'required'
    expect(handleValidationRule(payload)).toBe('required')
    payload.value = '123'
    expect(handleValidationRule(payload)).toBe('');
    payload.rule = 'email'
    payload.value = 'test'
    expect(handleValidationRule(payload)).toBe('email')
    payload.value = 'test@test.ro'
    expect(handleValidationRule(payload)).toBe('')
    payload.rule = 'max'
    payload.value = 'test'
    expect(handleValidationRule(payload)).toBe(false)
    payload.value = 'testtest'
    expect(handleValidationRule(payload)).toBe(true)
  });
});
