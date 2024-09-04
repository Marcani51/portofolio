export * from './http'
export * from './resources'
export * from './keys'

export function objectToFormData(
    object: Record<string, any>,
    formData: FormData = new FormData(),
    parentKey: string | null = null
  ): FormData {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const value = object[key]
        const formKey = parentKey
          ? isNaN(Number(key))
            ? `${parentKey}.${key}`
            : `${parentKey}[${key}]`
          : key
  
        if (value instanceof File) {
          formData.append(formKey, value, value.name)
        } else if (typeof value === 'object' && value !== null) {
          objectToFormData(value, formData, formKey)
        } else {
          const valueToAppend = typeof value === 'boolean' ? (value ? 1 : 0) : value
          formData.append(formKey, valueToAppend)
        }
      }
    }
    return formData
  }