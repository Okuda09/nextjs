import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('応募ありがとうございます！');
    };

    return (
        <main>
            <h1>お問い合わせ</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    お名前:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </label>
                <label>
                    メールアドレス:
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </label>
                <label>
                    メッセージ:
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </label>
                <button type="submit">送信</button>
            </form>
        </main>
    );
}
