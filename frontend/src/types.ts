export type WorkflowStep = 'EDITING' | 'VALIDATED' | 'SIMULATING' | 'SIMULATED' | 'EVALUATING' | 'EVALUATED';
export interface StrategyParams { period: number; oversold: number; overbought: number; positionSize: number }
export interface SavedStrategy { id: number; name: string; code: string; template_id?: string; asset?: string; timeframe?: string; parameters?: StrategyParams }
export interface StrategyTemplate { name: string; desc: string; badge: string; badgeColor: string }
export type StrategyTemplates = Record<string, StrategyTemplate>;
export type Metrics = Partial<Record<'backtest_return' | 'live_return' | 'slippage_cost' | 'latency_cost' | 'total_return' | 'win_rate' | 'trade_count' | 'max_drawdown' | 'sharpe_ratio' | 'live_vs_ideal_gap' | 'final_balance', number>>;
export interface Trade { timestamp: string; symbol: string; signal: string; quantity: number; execution_price: number; action?: string; realized_pnl?: number | null }
export interface SimLog { timestamp: string; message: string; type: 'trade' | 'status' | 'signal' }
export interface SimProgress { time: string; price: number; progress?: {price: number}; metrics?: Metrics; trade_count?: number; candles_processed?: number; total_candles?: number; percentage?: number; speed?: number; regime?: string }
export interface RegimeAnalysis { regime?: string; reasoning?: string; suitability_score?: number; volatility_score?: number; trend_strength?: number }
export interface RobustnessResults { reasoning?: string; robustness_score?: number; max_drawdown_consistency?: number; friction_sensitivity?: string; overfitting_risk?: string; sharpe_stability?: number }
export interface AgentOutput { agent_id: string; timestamp: string; status: string; data: Record<string, unknown>; logs: string[] }
export interface TraceEvent { agent_id: string; event_type: string; stage: string; timestamp: string; duration_ms?: number; data: Record<string, unknown>; message: string }
export interface SharedContext { regime_analysis?: RegimeAnalysis; robustness_results?: RobustnessResults; deployment_decision?: string; decision_reasoning?: string; replay_metrics?: Metrics; agent_outputs?: Record<string, AgentOutput>; traces?: TraceEvent[]; current_phase?: string }
