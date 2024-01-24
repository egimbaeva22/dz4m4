import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState( {
      fullName: '',
      age: '',
      gmail: '',
      phone: ''
    })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  return(
      <div>
        <h2>Форма Регистрации</h2>
        <form>
          <label htmlFor="fullName">ФИО:</label>
          <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
          />

          <label htmlFor="age">Возраст:</label>
          <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
          />

          <label htmlFor="email">Электронная почта:</label>
          <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
          />

          <label htmlFor="phone">Номер телефона:</label>
          <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>

        <h2>Результат Регистрации (REAL-TIME)</h2>
        <div>
          <p>
            <strong>ФИО:</strong> {formData.fullName}
          </p>
          <p>
            <strong>Возраст:</strong> {formData.age}
          </p>
          <p>
            <strong>Электронная почта:</strong> {formData.email}
          </p>
          <p>
            <strong>Номер телефона:</strong> {formData.phone}
          </p>
        </div>
      </div>
  )
}
 export default Form