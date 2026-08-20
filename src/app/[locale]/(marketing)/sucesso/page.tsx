'use client';

import { api } from '@convex/_generated/api';
import { useMutation } from 'convex/react';
import { useState } from 'react';
import { Section } from '@/features/landing/Section';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

type FormData = {
  businessName: string;
  ownerName: string;
  businessType: string;
  phone: string;
  email: string;
  address: string;
};

type ServiceData = {
  name: string;
  price: string;
  duration: string;
};

type BusinessHoursData = {
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
};

const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function SucessoPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    ownerName: '',
    businessType: '',
    phone: '',
    email: '',
    address: '',
  });

  const [services, setServices] = useState<ServiceData[]>([
    { name: '', price: '', duration: '' },
  ]);

  const [businessHours, setBusinessHours] = useState<BusinessHoursData[]>(
    Array.from({ length: 7 }, (_, i) => ({
      dayOfWeek: i,
      openTime: '09:00',
      closeTime: '18:00',
      isOpen: i > 0 && i < 6, // Seg a Sex aberto, Dom e Sáb fechado
    })),
  );

  const createClient = useMutation(api.clients.create);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index: number, field: keyof ServiceData, value: string) => {
    setServices((prev) => {
      const updated = [...prev];
      const current = updated[index];
      if (current) {
        updated[index] = { ...current, [field]: value };
      }
      return updated;
    });
  };

  const addService = () => {
    setServices(prev => [...prev, { name: '', price: '', duration: '' }]);
  };

  const removeService = (index: number) => {
    if (services.length > 1) {
      setServices(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleHoursChange = (index: number, field: keyof BusinessHoursData, value: boolean | string) => {
    setBusinessHours((prev) => {
      const updated = [...prev];
      const current = updated[index];
      if (current) {
        updated[index] = { ...current, [field]: value };
      }
      return updated;
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Create the client in Convex
      await createClient({
        businessName: formData.businessName,
        ownerName: formData.ownerName,
        phone: formData.phone,
        email: formData.email || undefined,
        businessType: formData.businessType,
        address: formData.address || undefined,
        planId: 'essencial', // Default plan - should be passed from payment session
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <Section className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="
                mx-auto mb-6 flex size-20 items-center justify-center
                rounded-full bg-green-100
              "
              >
                <svg className="size-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="mb-4 text-3xl font-bold text-foreground">
                Dados Enviados com Sucesso! 🎉
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Recebemos as informações do seu negócio. Nossa equipe iniciará a configuração
                da sua atendente virtual em breve. O prazo de entrega é de até 48 horas úteis.
              </p>
              <p className="text-sm text-muted-foreground">
                Você receberá atualizações pelo WhatsApp informado.
              </p>
            </div>
          </div>
        </Section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Section className="py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="
              mx-auto mb-6 flex size-20 items-center justify-center rounded-full
              bg-green-100
            "
            >
              <svg className="size-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground">
              Pagamento Aprovado! 🎉
            </h1>
            <p className="text-lg text-muted-foreground">
              Agora precisamos de algumas informações para configurar sua atendente virtual.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className={`
              flex items-center gap-2
              ${step >= 1
      ? `text-primary`
      : `text-muted-foreground`}
            `}
            >
              <div className={`
                flex size-8 items-center justify-center rounded-full text-sm
                font-bold
                ${
    step >= 1
      ? 'bg-primary text-primary-foreground'
      : `bg-muted text-muted-foreground`
    }
              `}
              >
                1
              </div>
              <span className="
                hidden
                sm:inline
              "
              >
                Dados do Negócio
              </span>
            </div>
            <div className="h-px w-12 bg-border" />
            <div className={`
              flex items-center gap-2
              ${step >= 2
      ? `text-primary`
      : `text-muted-foreground`}
            `}
            >
              <div className={`
                flex size-8 items-center justify-center rounded-full text-sm
                font-bold
                ${
    step >= 2
      ? 'bg-primary text-primary-foreground'
      : `bg-muted text-muted-foreground`
    }
              `}
              >
                2
              </div>
              <span className="
                hidden
                sm:inline
              "
              >
                Serviços
              </span>
            </div>
            <div className="h-px w-12 bg-border" />
            <div className={`
              flex items-center gap-2
              ${step >= 3
      ? `text-primary`
      : `text-muted-foreground`}
            `}
            >
              <div className={`
                flex size-8 items-center justify-center rounded-full text-sm
                font-bold
                ${
    step >= 3
      ? 'bg-primary text-primary-foreground'
      : `bg-muted text-muted-foreground`
    }
              `}
              >
                3
              </div>
              <span className="
                hidden
                sm:inline
              "
              >
                Horários
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            {/* Step 1: Business Info */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="mb-6 text-xl font-semibold">Dados do Negócio</h2>
                <div>
                  <label className="mb-2 block text-sm font-medium">Nome do Negócio *</label>
                  <input
                    type="text"
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    placeholder="Ex: Salão Beleza Pura"
                    value={formData.businessName}
                    onChange={e => handleFormChange('businessName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Nome do Proprietário *</label>
                  <input
                    type="text"
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    placeholder="Seu nome completo"
                    value={formData.ownerName}
                    onChange={e => handleFormChange('ownerName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Tipo de Negócio *</label>
                  <select
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    value={formData.businessType}
                    onChange={e => handleFormChange('businessType', e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="salao">Salão de Beleza</option>
                    <option value="barbearia">Barbearia</option>
                    <option value="clinica">Clínica</option>
                    <option value="lava-jato">Lava-Jato</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">WhatsApp do Negócio *</label>
                  <input
                    type="tel"
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={e => handleFormChange('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email (opcional)</label>
                  <input
                    type="email"
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    placeholder="contato@seudominio.com"
                    value={formData.email}
                    onChange={e => handleFormChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Endereço (opcional)</label>
                  <input
                    type="text"
                    className="
                      w-full rounded-md border border-border bg-background px-4
                      py-2
                    "
                    placeholder="Rua, número, bairro - Cidade/UF"
                    value={formData.address}
                    onChange={e => handleFormChange('address', e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.businessName || !formData.ownerName || !formData.businessType || !formData.phone}
                  className="
                    mt-6 w-full rounded-md bg-primary px-4 py-2 font-medium
                    text-primary-foreground
                    hover:bg-primary/90
                    disabled:opacity-50
                  "
                >
                  Próximo: Adicionar Serviços →
                </button>
              </div>
            )}

            {/* Step 2: Services */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="mb-6 text-xl font-semibold">Serviços Oferecidos</h2>
                {services.map((service, index) => (
                  <div
                    key={service.name || `service-${index}`}
                    className="rounded-md border border-border p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Serviço
                        {index + 1}
                      </span>
                      {services.length > 1 && (
                        <button
                          onClick={() => removeService(index)}
                          className="
                            text-sm text-red-500
                            hover:text-red-700
                          "
                        >
                          Remover
                        </button>
                      )}
                    </div>
                    <div className="
                      grid grid-cols-1 gap-3
                      sm:grid-cols-3
                    "
                    >
                      <input
                        type="text"
                        className="
                          rounded-md border border-border bg-background px-3
                          py-2 text-sm
                        "
                        placeholder="Nome do serviço"
                        value={service.name}
                        onChange={e => handleServiceChange(index, 'name', e.target.value)}
                      />
                      <input
                        type="number"
                        className="
                          rounded-md border border-border bg-background px-3
                          py-2 text-sm
                        "
                        placeholder="Preço (R$)"
                        value={service.price}
                        onChange={e => handleServiceChange(index, 'price', e.target.value)}
                      />
                      <input
                        type="number"
                        className="
                          rounded-md border border-border bg-background px-3
                          py-2 text-sm
                        "
                        placeholder="Duração (min)"
                        value={service.duration}
                        onChange={e => handleServiceChange(index, 'duration', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addService}
                  className="
                    w-full rounded-md border border-dashed border-border py-2
                    text-sm text-muted-foreground
                    hover:bg-muted
                  "
                >
                  + Adicionar outro serviço
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="
                      flex-1 rounded-md border border-border px-4 py-2
                      font-medium
                      hover:bg-muted
                    "
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!services.some(s => s.name)}
                    className="
                      flex-1 rounded-md bg-primary px-4 py-2 font-medium
                      text-primary-foreground
                      hover:bg-primary/90
                      disabled:opacity-50
                    "
                  >
                    Próximo: Horários →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Business Hours */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="mb-6 text-xl font-semibold">Horários de Funcionamento</h2>
                {businessHours.map(hours => (
                  <div
                    key={hours.dayOfWeek}
                    className="
                      flex items-center gap-3 rounded-md border border-border
                      p-3
                    "
                  >
                    <label className="flex w-24 items-center gap-2">
                      <input
                        type="checkbox"
                        checked={hours.isOpen}
                        onChange={e => handleHoursChange(hours.dayOfWeek, 'isOpen', e.target.checked)}
                        className="size-4"
                      />
                      <span className="text-sm font-medium">{dayNames[hours.dayOfWeek]}</span>
                    </label>
                    {hours.isOpen && (
                      <>
                        <input
                          type="time"
                          className="
                            rounded-md border border-border bg-background px-2
                            py-1 text-sm
                          "
                          value={hours.openTime}
                          onChange={e => handleHoursChange(hours.dayOfWeek, 'openTime', e.target.value)}
                        />
                        <span className="text-muted-foreground">até</span>
                        <input
                          type="time"
                          className="
                            rounded-md border border-border bg-background px-2
                            py-1 text-sm
                          "
                          value={hours.closeTime}
                          onChange={e => handleHoursChange(hours.dayOfWeek, 'closeTime', e.target.value)}
                        />
                      </>
                    )}
                    {!hours.isOpen && (
                      <span className="text-sm text-muted-foreground">Fechado</span>
                    )}
                  </div>
                ))}
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="
                      flex-1 rounded-md border border-border px-4 py-2
                      font-medium
                      hover:bg-muted
                    "
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="
                      flex-1 rounded-md bg-green-600 px-4 py-2 font-medium
                      text-white
                      hover:bg-green-700
                      disabled:opacity-50
                    "
                  >
                    {isSubmitting ? 'Enviando...' : '✅ Enviar e Iniciar Configuração'}
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Após o envio, nossa equipe entrará em contato para finalizar a configuração.
            O prazo de entrega é de até 48 horas úteis.
          </p>
        </div>
      </Section>
      <Footer />
    </>
  );
}
