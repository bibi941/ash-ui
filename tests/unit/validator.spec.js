import chai, { expect } from 'chai'
import validator from '../../src/validator'

describe('validator', () => {
  it('存在.', () => {
    expect(validator).to.exist
  })

  it('required true 报错.', () => {
    let data = {email: ''}
    let rules = [{key: 'email', required: true}]
    let errors = validator(data, rules)
    expect(errors.email.required).to.eq('必填')
  })

  it('required true 不报错', () => {
    let data = {email: 0}
    let rules = [{key: 'email', required: true}]
    let errors = validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('test pattern 报错', () => {
    let data = {email: '@b.com'}
    let rules = [{key: 'email', pattern: 'email'}]
    let errors = validator(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })

  it('test pattern 不报错', () => {
    let data = {email: '1@b.com'}
    let rules = [{key: 'email', pattern: 'email'}]
    let errors = validator(data, rules)
    expect(errors.email).to.not.exist
  })

  it('test required & pattern 优先且有且只有一个 error', () => {
    let data = {email: ''}
    let rules = [{key: 'email', pattern: 'email', required: true}]
    let errors = validator(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })

  it('test minLength & pattern', () => {
    let data = {email: ''}
    let rules = [{key: 'email', pattern: 'email', minLength: 4}]
    let errors = validator(data, rules)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.exist
  })
})
