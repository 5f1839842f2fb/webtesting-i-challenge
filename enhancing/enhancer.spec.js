const { succeed, fail, repair, get } = require( './enhancer')
// test away!

describe("succeed", () => {
  
  it("should increment item.enhancement if less than 20", () => {
    const item = {
      enhancement: 19
    }
    succeed(item)
    expect(item.enhancement).toBe(20)
  })

  it("should *not* increment item.enhancement if 20", () => {
    const item = {
      enhancement: 20
    }
    succeed(item)
    expect(item.enhancement).toBe(20)
  })
})

describe("fail", () => {

  it("should decrement item.enhancement if greater than 16", () => {
    const item = {
      durability: 100,
      enhancement: 17
    }
    fail(item)
    expect(item.enhancement).toBe(16)
  })

  it("should reduce item.durability by 10 if enhancement greater than 14", () => {
    const item = {
      durability: 100,
      enhancement: 17
    }
    fail(item)
    expect(item.durability).toBe(90)
  })

  it("should reduce item.durability by 5 if enhancement is less than 15", () => {
    const item = {
      durability: 100,
      enhancement: 14
    }
    fail(item)
    expect(item.durability).toBe(95)
  })
})

describe("repair", () => {
  
  it("should set durability to 100", () => {
    const item = {
      durability: 35
    }
    repair(item)
    expect(item.durability).toBe(100)
  })
})

describe("get", () => {
  
  it("should return fancy item name", () => {
    const item = {
      name: 'Yuria Longsword',
      enhancement: 14
    }
    get(item)
    expect(item.name).toBe('[+14] Yuria Longsword')
  })
})