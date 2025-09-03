import assert from 'assert'
import MiniSpec, { describe, it } from 'minispec'

function sayHello() {
  return 'Hello, world!'
}

describe('MiniSpec', async () => {
  it('says "Hello, world!"', async () => {
    assert.equal('Hello, world!', sayHello())
  })
})

MiniSpec.execute()

