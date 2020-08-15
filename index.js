module.exports = class Pool extends Set{
	constructor(type=Object, timeout=0){
		super();
		/** @type {Number} */
		this.timeout = timeout;
		/** @type {Array} */
		this.type = type;
		this._add = Set.prototype.add.bind(this);
	}

	add(data, timeout=this.timeout){
		// type check
		if(this.type === String){
			if(typeof data !== 'string') return this;
		}else if(this.type === Number){
			if(typeof data !== 'number') return this;
		}else if(!(data instanceof this.type)){
			return this;
		}

		this._add(data);
		if(timeout !== 0){
			setTimeout(() => this.remove(data), timeout);
		}
		return this;
	}

	remove(query){
		if(
			this.type === Object ||
			typeof this.type[Symbol.iterator] === 'function'
		){
			if(this.has(query)){
				this.delete(query);
			}else{
				let result = [...this];
				for(let i in query){
					result = result.filter(item => {
						return item[i] === query[i]
					});
				}
				result.forEach(i => this.delete(i));
			}
		}else{
			this.delete(query);
		}
		return this;
	}
}
